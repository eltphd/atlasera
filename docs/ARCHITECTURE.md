# System Architecture

## High-Level Overview

```
┌─────────────────┐
│   Users         │
└────────┬────────┘
         │
    ┌────▼─────┐
    │  Vercel  │ ← Static React SPA
    │  (CDN)   │
    └────┬─────┘
         │
    ┌────▼────────────┐
    │  API Gateway    │ ← (Planned Q2 2026)
    │  (Express/      │
    │   FastAPI)      │
    └────┬────────────┘
         │
    ┌────▼─────┬──────────┬─────────┐
    │          │          │         │
┌───▼───┐  ┌──▼──┐   ┌───▼───┐  ┌─▼──┐
│Postgres│ │Firebase│ │ Stripe │ │Google│
│        │ │ (Auth) │ │(Payment)│ │Drive│
└────────┘ └────────┘ └────────┘ └─────┘
```

## Components

### Marketing Site (Current)
- **Technology**: React 18 + Vite 5
- **Hosting**: Vercel (static hosting)
- **Purpose**: Public-facing site showcasing research pillars, mission, membership tiers
- **Features**: 
  - Research pillar cards
  - Membership tier comparison
  - About page
  - Contact information

### Member Portal (Planned Q2 2026)
- **Technology**: React 18 + Firebase Auth
- **Features**:
  - User authentication (email/password, OAuth)
  - Member profiles and dashboards
  - Research library access
  - Community forums
  - Monthly call scheduling
  - Payment management

### Admin Dashboard (Planned Q3 2026)
- **Technology**: React Admin or custom dashboard
- **Features**:
  - Content management (research projects, publications)
  - User analytics and member management
  - Research data visualization
  - Payment processing oversight

### API Layer (Planned Q2 2026)
- **Technology**: Node.js + Express OR Python FastAPI
- **Endpoints**: REST + GraphQL
- **Authentication**: JWT tokens via Firebase Auth
- **Rate Limiting**: Per-user and per-IP limits
- **Documentation**: OpenAPI/Swagger specs

## Tech Stack

### Frontend
- **React 18**: Component-based UI library
- **Vite 5**: Fast build tool with HMR
- **React Router 6**: Client-side routing
- **TailwindCSS**: Utility-first styling (planned)
- **Recharts**: Data visualization for research dashboards
- **React Query**: Server state management (API calls, caching)
- **Zustand**: Client state management (lightweight Redux alternative)

### Backend (Planned)
- **Node.js + Express** OR **Python FastAPI**: API server
- **PostgreSQL**: Relational database for structured data
- **Firebase**: Real-time data + authentication
- **Stripe**: Payment processing for membership tiers
- **SendGrid**: Email automation (newsletters, notifications)

### Infrastructure
- **Vercel**: Frontend hosting + edge functions
- **Railway/Render**: Backend hosting (planned)
- **GitHub Actions**: CI/CD pipeline
- **Cloudflare**: CDN + DDoS protection

## Data Flow

```
User Action → Frontend Component → API Call → Backend Service → Database → Response → UI Update
```

### Example: Research Project List
1. User navigates to `/research`
2. React component mounts and calls `useQuery('research-projects')`
3. React Query checks cache, then makes API request
4. API Gateway validates JWT token
5. Backend queries PostgreSQL for public research projects
6. Results returned as JSON
7. React Query caches response
8. Component renders project cards

## Planned Integrations

### Google Drive
- **Purpose**: Research library sync
- **Use Case**: Store and sync research documents, datasets
- **Implementation**: Google Drive API v3

### Notion
- **Purpose**: Content management system
- **Use Case**: Manage research project descriptions, blog posts
- **Implementation**: Notion API

### Stripe
- **Purpose**: Membership payment processing
- **Use Case**: Monthly subscription billing for membership tiers
- **Implementation**: Stripe Checkout + Webhooks

### SendGrid
- **Purpose**: Email automation
- **Use Case**: Welcome emails, monthly newsletters, payment receipts
- **Implementation**: SendGrid API

### Mixpanel/PostHog
- **Purpose**: Analytics and user behavior tracking
- **Use Case**: Track feature usage, conversion funnels
- **Implementation**: JavaScript SDK

## Security Considerations

### Authentication
- JWT tokens with short expiration (15 min access, 7 day refresh)
- Secure HTTP-only cookies for refresh tokens
- OAuth 2.0 for social login (Google, GitHub)

### Authorization
- Role-based access control (RBAC)
- Membership tier determines feature access
- Admin-only endpoints protected server-side

### Data Protection
- GDPR/COPPA compliant data handling
- Encrypted sensitive data at rest
- HTTPS everywhere (TLS 1.3)
- Rate limiting to prevent abuse

### Privacy
- Anonymous analytics (no PII in tracking)
- Participant opt-in for research data sharing
- Data retention policies clearly documented

## Scalability Considerations

### Frontend
- Code splitting by route (React.lazy)
- Image optimization (WebP format, lazy loading)
- CDN caching for static assets

### Backend
- Database connection pooling
- Redis caching for frequently accessed data
- Horizontal scaling via load balancer
- Queue system for async tasks (email sending, data processing)

### Database
- Indexed queries for performance
- Read replicas for scaling reads
- Partitioning strategy for large tables

## Monitoring & Observability

### Logging
- Structured logging (JSON format)
- Log aggregation via service (Datadog, LogRocket)
- Error tracking (Sentry)

### Metrics
- Application performance monitoring (APM)
- Database query performance
- API response times
- User engagement metrics

### Alerts
- Error rate thresholds
- API downtime detection
- Payment processing failures
- Database connection issues

## Deployment Strategy

### Frontend
- **Staging**: Preview deployments on every PR
- **Production**: Automatic deployment on merge to `main`
- **Rollback**: Instant via Vercel dashboard

### Backend (Planned)
- **Staging**: Separate environment for testing
- **Production**: Blue-green deployment strategy
- **Database Migrations**: Version-controlled, tested in staging first

## Future Enhancements

### Q2 2026
- GraphQL API layer
- Real-time features (WebSockets)
- Mobile app (React Native)

### Q3 2026
- Machine learning integration (recommendation engine)
- Advanced analytics dashboard
- Collaborative research tools

### Q4 2026
- Multi-language support (i18n)
- Advanced search (Elasticsearch)
- Video conferencing integration

