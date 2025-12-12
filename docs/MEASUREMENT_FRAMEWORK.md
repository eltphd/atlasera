# Measurement & Research Framework

## Core Methodology

Atlas ERA uses **community-centered evaluation** approaches that prioritize:
1. **Participant sovereignty** over data and research questions
2. **Mixed methods** combining quantitative rigor with qualitative depth
3. **Longitudinal designs** tracking learning trajectories over time
4. **Interpretable models** that families and educators can understand

## Statistical Approaches

### Latent Class/Transition Analysis (LCA/LTA)

#### Overview
LCA/LTA are **unsupervised learning** techniques that:
- Identify distinct subgroups (latent classes) without predetermined categories
- Track how individuals transition between classes over time
- Are particularly useful for heterogeneous populations (e.g., neurodivergent learners)

#### Statistical Foundation
- **Mixture models**: Each class has unique probability distribution over observed indicators
- **EM algorithm**: Iteratively estimate class membership and class parameters
- **Information criteria**: BIC/AIC for model selection (choosing optimal number of classes)

#### Implementation
- **Python**: `sklearn.mixture.GaussianMixture` for continuous indicators
- **R**: `poLCA` for categorical indicators, `depmixS4` for transition models

#### Research Applications
- Identifying distinct worldschooling family patterns
- Tracking neurodivergent learner trajectories
- Understanding educator professional development pathways
- Measuring intervention effects on learner agency

### Multilevel Modeling

#### Overview
Multilevel models (also called hierarchical linear models) account for nested data structures:
- Students within families
- Families within worldschooling networks
- Multiple timepoints within individuals

#### Implementation
- **R**: `lme4`, `nlme` packages
- **Python**: `statsmodels`, `pymer4` packages

#### Research Applications
- Modeling learning outcomes while accounting for family-level effects
- Understanding network-level influences on educational decisions
- Analyzing repeated measures data (longitudinal surveys)

### Structural Equation Modeling (SEM)

#### Overview
SEM tests theoretical frameworks linking:
- Learning environments → Learning outcomes
- Family characteristics → Educational choices
- Intervention components → Mechanisms of change

#### Implementation
- **R**: `lavaan` package
- **Python**: `semopy` package

#### Research Applications
- Testing theoretical models of worldschooling effectiveness
- Understanding pathways from environment to outcomes
- Mediation and moderation analyses

## Data Collection Tools

### Survey Automation Pipeline

```
Google Forms → Apps Script → Google Sheets → R/Python → Analysis Dashboard
```

#### Components
1. **Google Forms**: Participant-facing survey interface
2. **Apps Script**: Automated data validation and quality checks
3. **Google Sheets**: Centralized data storage
4. **R/Python Scripts**: Data cleaning, recoding, preprocessing
5. **Analysis Dashboard**: Visualization and reporting (Recharts, Plotly)

#### Features
- Automated data pulls (daily/weekly)
- Likert scale recoding
- Missing data handling
- Duplicate detection
- Quality checks (out-of-range values, incomplete surveys)

### Longitudinal Tracking

#### Design
- **Frequency**: Quarterly check-ins
- **Method**: Automated email with survey link
- **Duration**: Multi-year tracking (3-5 years)

#### Survey Components
- **Parent/Educator Surveys** (15-20 min)
  - Learning environment characteristics
  - Family decision-making processes
  - Resource access and constraints
  - Satisfaction and well-being

- **Student Self-Reports** (10-15 min, ages 12+)
  - Engagement and motivation
  - Learning preferences
  - Social connections
  - Agency and self-direction

### Qualitative Methods

#### Semi-Structured Interviews
- **Frequency**: Annual deep-dive interviews
- **Duration**: 60-90 minutes
- **Topics**: 
  - Educational philosophy and values
  - Decision-making processes
  - Challenges and adaptations
  - Outcomes and satisfaction

#### Focus Groups
- **Frequency**: Quarterly (by research pillar)
- **Participants**: 6-8 members per group
- **Topics**: 
  - Shared challenges and solutions
  - Community knowledge exchange
  - Research question prioritization

#### Ethnographic Observations
- **Frequency**: Selected families (subsample)
- **Duration**: 3-5 day immersive visits
- **Focus**: 
  - Daily learning routines
  - Family dynamics
  - Community interactions

## Outcome Domains

### 1. Academic Mastery
- **Indicators**: Skill acquisition, knowledge retention, competency demonstration
- **Measurement**: 
  - Standardized assessments (when appropriate)
  - Portfolio-based evaluation
  - Project-based demonstrations
  - Self-reported progress

### 2. Socioemotional Development
- **Indicators**: Self-regulation, relationship quality, emotional intelligence
- **Measurement**:
  - Validated scales (SDQ, BRIEF)
  - Parent/educator reports
  - Student self-reports (ages 12+)
  - Observational data

### 3. Agency & Self-Direction
- **Indicators**: Goal-setting, motivation, persistence, autonomy
- **Measurement**:
  - Self-Determination Theory scales
  - Goal-setting interviews
  - Learning plan analysis
  - Self-reported agency measures

### 4. Cultural Competence
- **Indicators**: Language skills, cross-cultural understanding, global citizenship
- **Measurement**:
  - Language proficiency assessments
  - Cultural knowledge surveys
  - Cross-cultural interaction observations
  - Travel/immersion documentation

### 5. Family Well-being
- **Indicators**: Stress levels, financial stability, satisfaction, cohesion
- **Measurement**:
  - Family stress scales
  - Financial well-being surveys
  - Satisfaction questionnaires
  - Family functioning assessments

## Privacy & Ethics

### GDPR Compliance
- **Data Minimization**: Only collect necessary information
- **Consent Management**: Clear opt-in for each study component
- **Right to Access**: Participants can view their data
- **Right to Deletion**: Participants can withdraw and delete data
- **Data Portability**: Export data in standard formats

### COPPA Compliance
- **Parental Consent**: Required for participants under 13
- **Limited Collection**: Minimal data collection for minors
- **Age Verification**: Robust age verification process
- **Parental Access**: Parents can view and delete child data

### Research Ethics
- **IRB Approval**: All studies reviewed by institutional review board
- **Informed Consent**: Clear explanation of research purpose and procedures
- **Anonymization**: Data anonymized before sharing with research community
- **Data Retention**: Clear policies on data retention and destruction

### Participant Sovereignty
- **Research Question Input**: Participants help shape research questions
- **Data Ownership**: Participants retain ownership of their data
- **Sharing Control**: Participants choose what data to share
- **Community Benefits**: Research findings shared back with participants

## Data Analysis Workflow

### 1. Data Cleaning
- Remove duplicates
- Handle missing data (multiple imputation or FIML)
- Recode variables
- Standardize scales

### 2. Exploratory Analysis
- Descriptive statistics
- Visualizations (distributions, relationships)
- Identify outliers
- Check assumptions

### 3. Model Fitting
- Fit multiple models (e.g., 1-6 class LCA solutions)
- Compare models using information criteria
- Select best-fitting model
- Validate model assumptions

### 4. Interpretation
- Characterize latent classes/profiles
- Describe transitions over time
- Test predictors of class membership
- Generate visualizations

### 5. Reporting
- Write up findings
- Create visualizations for multiple audiences
- Share results with participants
- Publish in academic and public venues

## Open Science Practices

### Pre-registration
- Pre-register hypotheses and analysis plans
- Document deviations from plan
- Share pre-registration links in publications

### Data Sharing
- De-identified data shared via open repositories
- Code shared via GitHub
- Documentation for reproducibility

### Publication
- Publish in open-access venues when possible
- Share preprints (arXiv, PsyArXiv)
- Create public-facing summaries for families

## Tools & Resources

### Software
- **R**: Primary statistical analysis environment
- **Python**: Machine learning and advanced analytics
- **Google Workspace**: Data collection and storage
- **Recharts/Plotly**: Data visualization

### Repositories
- Research code: `/research-tools` directory in this repo
- Data: Open repositories (OSF, Zenodo) with proper anonymization
- Publications: Preprint servers and open-access journals

### Training Resources
- Statistical workshops for network members
- Methodology documentation in `/docs`
- Code examples with comments and explanations

