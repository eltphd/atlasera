# Longitudinal Analysis Tools

## Overview
This directory contains Python implementations of latent class/transition analysis (LCA/LTA) methods used in Atlas ERA research.

## Background
LCA/LTA are **unsupervised learning** techniques that:
- Identify distinct subgroups (latent classes) without predetermined categories
- Track how individuals transition between classes over time
- Are particularly useful for heterogeneous populations (e.g., neurodivergent learners)

## Statistical Foundation
- **Mixture models**: Each class has unique probability distribution over observed indicators
- **EM algorithm**: Iteratively estimate class membership and class parameters
- **Information criteria**: BIC/AIC for model selection (choosing optimal number of classes)

## Files
- `lta_pipeline.py`: Core LTA implementation using scikit-learn GMM
- `model_comparison.py`: Compare 1-6 class solutions (planned)
- `class_profiling.py`: Characterize each latent class (planned)

## Usage

### Installation
```bash
pip install numpy pandas scikit-learn scipy matplotlib seaborn
```

### Basic Example
```python
from lta_pipeline import LTAAnalysis

# Load your longitudinal data
t1_data = pd.read_csv('timepoint1.csv')
t2_data = pd.read_csv('timepoint2.csv')

# Fit LTA model
lta = LTAAnalysis(n_classes=4)
lta.fit_timepoint(t1_data, 'T1')
lta.fit_timepoint(t2_data, 'T2')

# Estimate transition matrix
trans_matrix = lta.estimate_transition_matrix(
    lta.class_assignments['T1'],
    lta.class_assignments['T2']
)

# Visualize
lta.plot_transition_diagram(trans_matrix)
```

## Extending to R
For compatibility with existing R workflows:
```python
# Export class assignments for use in R
import pandas as pd

pd.DataFrame({
    'student_id': range(len(lta.class_assignments['T1'])),
    't1_class': lta.class_assignments['T1'],
    't2_class': lta.class_assignments['T2']
}).to_csv('lta_classes.csv', index=False)
```

Then in R:
```r
library(poLCA)
library(tidyverse)

# Load class assignments
classes <- read_csv("lta_classes.csv")

# Run LTA in R for comparison
# (poLCA syntax here)
```

## Research Applications
- Identifying distinct worldschooling family patterns
- Tracking neurodivergent learner trajectories
- Understanding educator professional development pathways
- Measuring intervention effects on learner agency

