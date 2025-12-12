"""
Latent Transition Analysis (LTA) Pipeline
Adapted from dissertation methodology (Dr. Tartt, UCSB 2024)

This script demonstrates the statistical framework used in Atlas ERA research:
- Identify latent learner profiles at multiple timepoints
- Track transitions between profiles over time
- Estimate stability vs. change in learning trajectories
"""

import numpy as np
import pandas as pd
from sklearn.mixture import GaussianMixture
from scipy.stats import chi2_contingency
import matplotlib.pyplot as plt
import seaborn as sns

class LTAAnalysis:
    """
    Latent Transition Analysis for longitudinal learner data
    
    Attributes:
        n_classes (int): Number of latent classes/profiles
        timepoints (list): List of measurement occasions
        model (dict): Fitted GMM models for each timepoint
    """
    
    def __init__(self, n_classes=4, random_state=42):
        self.n_classes = n_classes
        self.random_state = random_state
        self.models = {}
        self.class_assignments = {}
        
    def fit_timepoint(self, data, timepoint):
        """
        Fit Gaussian Mixture Model for a single timepoint
        
        Args:
            data (pd.DataFrame): Indicator variables for this timepoint
            timepoint (str): Identifier for measurement occasion (e.g., 'T1', 'T2')
        
        Returns:
            Fitted GaussianMixture model
        """
        gmm = GaussianMixture(
            n_components=self.n_classes,
            covariance_type='full',
            n_init=50,  # Multiple random starts for stability
            random_state=self.random_state
        )
        
        gmm.fit(data)
        self.models[timepoint] = gmm
        self.class_assignments[timepoint] = gmm.predict(data)
        
        return gmm
    
    def estimate_transition_matrix(self, t1_classes, t2_classes):
        """
        Calculate transition probabilities between timepoints
        
        Args:
            t1_classes (array): Class assignments at Time 1
            t2_classes (array): Class assignments at Time 2
        
        Returns:
            Transition probability matrix (n_classes x n_classes)
        """
        transition_counts = np.zeros((self.n_classes, self.n_classes))
        
        for t1, t2 in zip(t1_classes, t2_classes):
            transition_counts[t1, t2] += 1
        
        # Convert counts to probabilities
        row_sums = transition_counts.sum(axis=1, keepdims=True)
        transition_probs = transition_counts / row_sums
        
        return transition_probs
    
    def plot_transition_diagram(self, transition_matrix, labels=None):
        """
        Visualize transition probabilities as heatmap
        
        Args:
            transition_matrix (array): Transition probability matrix
            labels (list): Optional class labels for axes
        """
        if labels is None:
            labels = [f"Class {i+1}" for i in range(self.n_classes)]
        
        plt.figure(figsize=(10, 8))
        sns.heatmap(
            transition_matrix,
            annot=True,
            fmt='.2f',
            cmap='YlOrRd',
            xticklabels=labels,
            yticklabels=labels,
            cbar_kws={'label': 'Transition Probability'}
        )
        plt.xlabel('Class at Time 2')
        plt.ylabel('Class at Time 1')
        plt.title('Learner Profile Transitions')
        plt.tight_layout()
        return plt

# Example usage
if __name__ == "__main__":
    # Simulated learner data (replace with real survey data)
    np.random.seed(42)
    n_students = 500
    
    # Time 1 indicators (e.g., engagement, mastery, agency)
    t1_data = pd.DataFrame({
        'engagement': np.random.beta(2, 5, n_students),
        'mastery': np.random.beta(3, 3, n_students),
        'agency': np.random.beta(2, 4, n_students),
        'social': np.random.beta(4, 2, n_students)
    })
    
    # Time 2 indicators (with some change)
    t2_data = t1_data + np.random.normal(0, 0.1, t1_data.shape)
    t2_data = t2_data.clip(0, 1)
    
    # Fit LTA model
    lta = LTAAnalysis(n_classes=4)
    lta.fit_timepoint(t1_data, 'T1')
    lta.fit_timepoint(t2_data, 'T2')
    
    # Estimate transitions
    trans_matrix = lta.estimate_transition_matrix(
        lta.class_assignments['T1'],
        lta.class_assignments['T2']
    )
    
    print("Transition Probability Matrix:")
    print(trans_matrix)
    
    # Visualize
    lta.plot_transition_diagram(trans_matrix)
    plt.savefig('learner_transitions.png', dpi=300, bbox_inches='tight')
    print("\nVisualization saved as 'learner_transitions.png'")

