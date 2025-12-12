# API Specification (Planned)

## Base URL
`https://api.atlasera.org/v1`

## Authentication

### JWT Tokens
- **Method**: Bearer token in Authorization header
- **Format**: `Authorization: Bearer <token>`
- **Token Source**: Firebase Auth
- **Expiration**: 15 minutes (access token), 7 days (refresh token)

### Example Request
```http
GET /api/v1/research-projects HTTP/1.1
Host: api.atlasera.org
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Endpoints

### Research Projects

#### GET /research-projects
**Description:** List all public research projects  
**Auth Required:** No  
**Query Parameters:**
- `pillar` (optional, string): Filter by research pillar
  - Values: `research_inquiry`, `learning_ecosystems`, `knowledge_mobilization`, `global_collaborations`, `applied_innovation`
- `status` (optional, string): Filter by project status
  - Values: `proposal`, `active`, `completed`, `archived`
- `page` (optional, integer, default=1): Page number for pagination
- `limit` (optional, integer, default=20, max=100): Number of results per page

**Response:**
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Neurodivergent Learning Pathways Study",
      "description": "Longitudinal study tracking learning trajectories...",
      "lead_researcher": {
        "id": "660e8400-e29b-41d4-a716-446655440001",
        "name": "Dr. Jane Smith",
        "email": "jane@example.com"
      },
      "pillar": "learning_ecosystems",
      "status": "active",
      "visibility": "public",
      "start_date": "2025-01-01",
      "end_date": "2026-12-31",
      "created_at": "2025-12-01T00:00:00Z",
      "updated_at": "2025-12-10T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "total_pages": 3
  }
}
```

#### GET /research-projects/:id
**Description:** Get details of a specific research project  
**Auth Required:** No (if public), Yes (if members_only)  
**Path Parameters:**
- `id` (required, UUID): Research project ID

**Response:**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "title": "Neurodivergent Learning Pathways Study",
  "description": "Full project description...",
  "lead_researcher": {
    "id": "660e8400-e29b-41d4-a716-446655440001",
    "name": "Dr. Jane Smith",
    "email": "jane@example.com",
    "affiliation": "UCSB"
  },
  "collaborators": [
    {
      "id": "770e8400-e29b-41d4-a716-446655440002",
      "name": "Dr. John Doe",
      "role": "co_researcher"
    }
  ],
  "pillar": "learning_ecosystems",
  "status": "active",
  "visibility": "public",
  "publications": [
    {
      "id": "880e8400-e29b-41d4-a716-446655440003",
      "title": "Preliminary Findings",
      "publication_type": "preprint",
      "url": "https://arxiv.org/abs/..."
    }
  ],
  "start_date": "2025-01-01",
  "end_date": "2026-12-31",
  "created_at": "2025-12-01T00:00:00Z",
  "updated_at": "2025-12-10T00:00:00Z"
}
```

### Membership

#### POST /membership/join
**Description:** Submit membership application  
**Auth Required:** Yes  
**Request Body:**
```json
{
  "tier": "researcher",
  "research_interests": ["neurodivergent learning", "worldschooling"],
  "affiliation": "Independent Researcher",
  "payment_method_id": "pm_xxxxx",
  "billing_cycle": "monthly"
}
```

**Response:**
```json
{
  "success": true,
  "membership": {
    "id": "990e8400-e29b-41d4-a716-446655440004",
    "tier": "researcher",
    "status": "active",
    "next_billing_date": "2026-01-12",
    "stripe_subscription_id": "sub_xxxxx"
  }
}
```

#### GET /membership/current
**Description:** Get current user's membership information  
**Auth Required:** Yes

**Response:**
```json
{
  "tier": "researcher",
  "status": "active",
  "started_at": "2025-12-01T00:00:00Z",
  "next_billing_date": "2026-01-12",
  "features": {
    "access_research_library": true,
    "monthly_calls": true,
    "co_authorship": true,
    "data_access": true
  }
}
```

#### PATCH /membership/current
**Description:** Update membership (e.g., change tier, cancel)  
**Auth Required:** Yes  
**Request Body:**
```json
{
  "action": "cancel", // or "change_tier", "update_payment_method"
  "new_tier": "practitioner" // if action is "change_tier"
}
```

### Research Library

#### GET /research-library
**Description:** List documents in research library  
**Auth Required:** Yes (membership required)  
**Query Parameters:**
- `pillar` (optional, string): Filter by research pillar
- `tags` (optional, string[]): Filter by tags (comma-separated)
- `access_level` (optional, string): Filter by access level
- `page` (optional, integer, default=1)
- `limit` (optional, integer, default=20)

**Response:**
```json
{
  "data": [
    {
      "id": "aa0e8400-e29b-41d4-a716-446655440005",
      "title": "Worldschooling Pedagogies: A Literature Review",
      "description": "Comprehensive review of existing research...",
      "file_url": "https://storage.atlasera.org/documents/...",
      "file_type": "pdf",
      "tags": ["worldschooling", "pedagogy", "literature-review"],
      "pillar": "research_inquiry",
      "access_level": "members_only",
      "uploaded_by": {
        "id": "660e8400-e29b-41d4-a716-446655440001",
        "name": "Dr. Jane Smith"
      },
      "created_at": "2025-11-15T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 127
  }
}
```

### Community Calls

#### GET /community-calls
**Description:** List upcoming and past community calls  
**Auth Required:** Yes (membership required)  
**Query Parameters:**
- `upcoming` (optional, boolean): Filter to only upcoming calls
- `tier` (optional, string): Filter by tier access

**Response:**
```json
{
  "data": [
    {
      "id": "bb0e8400-e29b-41d4-a716-446655440006",
      "title": "Q1 2026 Research Updates",
      "description": "Join us for updates on active research projects...",
      "scheduled_at": "2026-01-15T18:00:00Z",
      "duration_minutes": 60,
      "zoom_link": "https://zoom.us/j/...",
      "tier_access": ["practitioner", "researcher"],
      "recording_url": null
    }
  ]
}
```

### Users

#### GET /users/me
**Description:** Get current user's profile  
**Auth Required:** Yes

**Response:**
```json
{
  "id": "660e8400-e29b-41d4-a716-446655440001",
  "email": "jane@example.com",
  "name": "Dr. Jane Smith",
  "membership_tier": "researcher",
  "membership_status": "active",
  "research_interests": ["neurodivergent learning", "worldschooling"],
  "affiliation": "UCSB",
  "created_at": "2025-11-01T00:00:00Z",
  "last_login_at": "2025-12-10T14:30:00Z"
}
```

#### PATCH /users/me
**Description:** Update current user's profile  
**Auth Required:** Yes  
**Request Body:**
```json
{
  "name": "Dr. Jane Smith",
  "research_interests": ["neurodivergent learning", "worldschooling", "mobile learning"],
  "affiliation": "UCSB"
}
```

## Error Responses

### Standard Error Format
```json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Research project not found",
    "details": {
      "resource_id": "550e8400-e29b-41d4-a716-446655440000"
    }
  }
}
```

### Common Error Codes
- `UNAUTHORIZED` (401): Missing or invalid authentication token
- `FORBIDDEN` (403): User doesn't have permission for this resource
- `RESOURCE_NOT_FOUND` (404): Requested resource doesn't exist
- `VALIDATION_ERROR` (422): Request body validation failed
- `RATE_LIMIT_EXCEEDED` (429): Too many requests
- `INTERNAL_SERVER_ERROR` (500): Server error

## Rate Limiting

- **Public Endpoints**: 100 requests per hour per IP
- **Authenticated Endpoints**: 1000 requests per hour per user
- **Headers**: Rate limit info included in response headers
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Remaining requests in window
  - `X-RateLimit-Reset`: Unix timestamp when limit resets

## Pagination

All list endpoints support pagination:
- **Default**: 20 items per page
- **Maximum**: 100 items per page
- **Page numbering**: 1-indexed

Pagination info included in response:
```json
{
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "total_pages": 3,
    "has_next": true,
    "has_prev": false
  }
}
```

## Versioning

API versioning via URL path:
- Current version: `/v1`
- Future versions: `/v2`, `/v3`, etc.
- Deprecated versions: Maintained for 6 months after deprecation

## Webhooks (Planned)

### Stripe Payment Events
- `payment.succeeded`: Membership payment successful
- `payment.failed`: Membership payment failed
- `customer.subscription.deleted`: Membership cancelled

### Research Project Events
- `project.created`: New research project created
- `project.published`: Research project made public
- `publication.added`: New publication added to project

## GraphQL API (Planned Q2 2026)

GraphQL endpoint will be available at `/graphql` for more flexible queries.

