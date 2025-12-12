# Data Model

## Entities

### User

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  membership_tier VARCHAR(50),  -- 'practitioner' | 'researcher' | 'institutional' | 'founding'
  membership_status VARCHAR(50), -- 'active' | 'cancelled' | 'pending' | 'expired'
  stripe_customer_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_membership_tier ON users(membership_tier);
CREATE INDEX idx_users_membership_status ON users(membership_status);
```

### Research Project

```sql
CREATE TABLE research_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  description TEXT,
  lead_researcher_id UUID REFERENCES users(id),
  pillar VARCHAR(100),  -- 'research_inquiry' | 'learning_ecosystems' | 'knowledge_mobilization' | 'global_collaborations' | 'applied_innovation'
  status VARCHAR(50),   -- 'proposal' | 'active' | 'completed' | 'archived'
  visibility VARCHAR(50), -- 'public' | 'members_only' | 'private'
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_research_projects_pillar ON research_projects(pillar);
CREATE INDEX idx_research_projects_status ON research_projects(status);
CREATE INDEX idx_research_projects_visibility ON research_projects(visibility);
```

### Membership Tier

```sql
CREATE TABLE membership_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE, -- 'practitioner' | 'researcher' | 'institutional' | 'founding'
  price_monthly DECIMAL(10,2),
  price_yearly DECIMAL(10,2),
  stripe_price_id_monthly VARCHAR(255),
  stripe_price_id_yearly VARCHAR(255),
  features JSONB,  -- {"access_research_library": true, "monthly_calls": true, "co_authorship": false}
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_membership_tiers_slug ON membership_tiers(slug);
```

### Project Collaborator

```sql
CREATE TABLE project_collaborators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES research_projects(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50), -- 'lead' | 'co_researcher' | 'contributor' | 'advisor'
  joined_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(project_id, user_id)
);

CREATE INDEX idx_project_collaborators_project ON project_collaborators(project_id);
CREATE INDEX idx_project_collaborators_user ON project_collaborators(user_id);
```

### Publication

```sql
CREATE TABLE publications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  abstract TEXT,
  authors JSONB, -- [{"name": "Dr. Jane Smith", "user_id": "uuid", "affiliation": "UCSB"}]
  project_id UUID REFERENCES research_projects(id),
  publication_type VARCHAR(50), -- 'journal_article' | 'conference_paper' | 'book_chapter' | 'preprint' | 'blog_post'
  doi VARCHAR(255),
  url VARCHAR(500),
  published_at DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_publications_project ON publications(project_id);
CREATE INDEX idx_publications_type ON publications(publication_type);
```

### Research Library Document

```sql
CREATE TABLE research_library_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  description TEXT,
  file_url VARCHAR(500),
  file_type VARCHAR(50), -- 'pdf' | 'docx' | 'xlsx' | 'link'
  tags TEXT[], -- Array of tags for filtering
  pillar VARCHAR(100), -- Research pillar association
  access_level VARCHAR(50), -- 'public' | 'members_only' | 'researcher_only'
  uploaded_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_research_library_tags ON research_library_documents USING GIN(tags);
CREATE INDEX idx_research_library_pillar ON research_library_documents(pillar);
CREATE INDEX idx_research_library_access ON research_library_documents(access_level);
```

### Community Call

```sql
CREATE TABLE community_calls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  scheduled_at TIMESTAMP NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  zoom_link VARCHAR(500),
  recording_url VARCHAR(500),
  tier_access VARCHAR(50)[], -- ['practitioner', 'researcher'] - which tiers can access
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_community_calls_scheduled ON community_calls(scheduled_at);
```

## Relationships

### User → MembershipTier
- **Type**: Many-to-one
- **Foreign Key**: `users.membership_tier` → `membership_tiers.slug`
- **Notes**: User can have one active membership tier at a time

### User → ResearchProject
- **Type**: Many-to-many via `project_collaborators`
- **Notes**: Users can collaborate on multiple projects, projects can have multiple collaborators

### ResearchProject → Pillar
- **Type**: Many-to-one
- **Foreign Key**: `research_projects.pillar` → pillar enum
- **Notes**: Each project is associated with one research pillar

### ResearchProject → Publication
- **Type**: One-to-many
- **Foreign Key**: `publications.project_id` → `research_projects.id`
- **Notes**: A project can produce multiple publications

### User → ResearchLibraryDocument
- **Type**: One-to-many (uploader)
- **Foreign Key**: `research_library_documents.uploaded_by` → `users.id`
- **Notes**: Users can upload documents to the research library

## Data Access Patterns

### Public Data (No Auth Required)
- Research projects with `visibility = 'public'`
- Publications with public access
- Research library documents with `access_level = 'public'`
- Membership tier information (pricing, features)

### Member-Only Data (Auth Required)
- Research projects with `visibility = 'members_only'`
- Research library documents with `access_level = 'members_only'`
- Community call recordings
- Member directory (opt-in)

### Researcher-Only Data (Researcher Tier Required)
- Research library documents with `access_level = 'researcher_only'`
- Raw research data (with proper IRB approval)
- Collaborative research tools
- Co-authorship opportunities

### Admin-Only Data
- User management
- Payment processing logs
- Analytics and metrics
- Content moderation

## Data Privacy & Compliance

### GDPR Compliance
- Right to access: Users can export their data
- Right to deletion: Users can request account deletion
- Data minimization: Only collect necessary information
- Consent management: Clear opt-in for research participation

### COPPA Compliance
- Parental consent required for users under 13
- Limited data collection for minors
- Age verification process

### Research Ethics
- IRB approval tracking for research projects
- Participant consent forms stored securely
- Anonymization of research data before sharing
- Data retention policies per project

## Indexes & Performance

### High-Traffic Queries
- User authentication: `idx_users_email`
- Research project listings: `idx_research_projects_status`, `idx_research_projects_visibility`
- Research library search: `idx_research_library_tags` (GIN index for array search)

### Foreign Key Indexes
- All foreign keys automatically indexed for join performance
- Composite indexes for common query patterns

## Future Schema Additions

### Q2 2026
- `forum_posts` table for community discussions
- `forum_replies` table for threaded discussions
- `notifications` table for user notifications
- `payment_transactions` table for Stripe webhook tracking

### Q3 2026
- `research_data` table for structured datasets
- `surveys` table for longitudinal data collection
- `analytics_events` table for user behavior tracking

