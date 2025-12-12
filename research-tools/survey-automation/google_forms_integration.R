# Google Forms to Analysis Pipeline
# Automates data extraction, cleaning, and preprocessing

library(googlesheets4)
library(tidyverse)
library(lubridate)

# Authenticate with Google
gs4_auth(email = "research@atlasera.org")

#' Pull latest survey responses
#'
#' @param sheet_id Google Sheet ID (linked to form)
#' @param date_var Name of timestamp variable
#' @param since_date Only pull responses after this date (YYYY-MM-DD)
#' @return Tibble of cleaned survey responses
pull_survey_data <- function(sheet_id, date_var = "Timestamp", since_date = NULL) {
  
  # Read raw data
  raw_data <- read_sheet(sheet_id)
  
  # Convert timestamp to datetime
  raw_data <- raw_data %>%
    mutate(!!sym(date_var) := mdy_hms(!!sym(date_var)))
  
  # Filter by date if specified
  if (!is.null(since_date)) {
    raw_data <- raw_data %>%
      filter(!!sym(date_var) >= ymd(since_date))
  }
  
  # Standardize column names (remove spaces, special chars)
  colnames(raw_data) <- colnames(raw_data) %>%
    str_replace_all(" ", "_") %>%
    str_replace_all("[^[:alnum:]_]", "") %>%
    tolower()
  
  return(raw_data)
}

#' Recode Likert scale items to numeric
#'
#' @param data Survey data tibble
#' @param likert_cols Vector of column names with Likert responses
#' @param scale_labels Named vector mapping text to numbers
#' @return Data with recoded Likert items
recode_likert <- function(data, likert_cols, scale_labels = NULL) {
  
  # Default 5-point scale
  if (is.null(scale_labels)) {
    scale_labels <- c(
      "Strongly Disagree" = 1,
      "Disagree" = 2,
      "Neutral" = 3,
      "Agree" = 4,
      "Strongly Agree" = 5
    )
  }
  
  # Recode each column
  data %>%
    mutate(across(
      all_of(likert_cols),
      ~ recode(., !!!scale_labels)
    ))
}

# Example usage
if (FALSE) {  # Set to TRUE to run
  
  # Your Google Sheet ID
  sheet_id <- "your_sheet_id_here"
  
  # Pull recent responses
  survey_data <- pull_survey_data(
    sheet_id = sheet_id,
    since_date = "2025-11-01"
  )
  
  # Identify Likert scale columns
  likert_items <- c(
    "i_feel_engaged_in_learning",
    "i_have_agency_over_my_education",
    "my_family_supports_my_learning"
  )
  
  # Recode to numeric
  survey_clean <- recode_likert(survey_data, likert_items)
  
  # Save for analysis
  write_csv(survey_clean, "data/survey_responses_clean.csv")
  
  # Quick descriptive stats
  survey_clean %>%
    select(all_of(likert_items)) %>%
    summary()
}

