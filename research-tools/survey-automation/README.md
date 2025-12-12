# Survey Automation Tools

## Overview
R scripts for automating the pipeline from Google Forms → cleaned data → analysis-ready datasets.

## Workflow
```
[Participant] → Google Form → Google Sheet → R Script → Clean CSV → Analysis
```

## Features
- **Automated pulls**: Fetch new responses daily/weekly
- **Data cleaning**: Standardize column names, recode Likert scales, handle missing data
- **Quality checks**: Flag duplicate responses, out-of-range values, incomplete surveys
- **Export formats**: CSV, RDS, SPSS (.sav), Stata (.dta)

## Setup

### Prerequisites
```r
install.packages(c("googlesheets4", "tidyverse", "lubridate"))
```

### Authentication
```r
library(googlesheets4)

# Interactive auth (first time only)
gs4_auth()

# Or use service account
gs4_auth(path = "path/to/service-account-key.json")
```

### Get Sheet ID
Your Google Sheet ID is in the URL:
```
https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
```

## Usage
See `google_forms_integration.R` for full functions.

### Quick Example
```r
source("google_forms_integration.R")

# Pull and clean survey data
data <- pull_survey_data(sheet_id = "your_id", since_date = "2025-12-01")
data_clean <- recode_likert(data, likert_cols = c("q1", "q2", "q3"))

# Export
write_csv(data_clean, "survey_clean.csv")
```

## Scheduled Automation
For daily data pulls, use cron (Linux/Mac) or Task Scheduler (Windows):

### Cron example
```bash
# Run every day at 6am
0 6 * * * Rscript /path/to/pull_survey_data.R
```

Create `pull_survey_data.R`:
```r
source("google_forms_integration.R")
library(tidyverse)

# Configuration
SHEET_ID <- "your_sheet_id"
OUTPUT_DIR <- "data/"

# Pull and clean
data <- pull_survey_data(SHEET_ID)
data_clean <- recode_likert(data, likert_cols = c("q1", "q2", "q3"))

# Save with timestamp
filename <- paste0(OUTPUT_DIR, "survey_", Sys.Date(), ".csv")
write_csv(data_clean, filename)

# Log
cat(sprintf("Pulled %d responses at %s\n", nrow(data_clean), Sys.time()))
```

