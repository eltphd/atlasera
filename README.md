# Atlas Education Research Association (Atlas ERA)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/eltphd/atlasera/workflows/Deploy/badge.svg)](https://github.com/eltphd/atlasera/actions)
[![Version](https://img.shields.io/badge/version-0.2.0-blue.svg)](https://github.com/eltphd/atlasera/releases)

**Building the infrastructure for a global network of worldschooling educators and researchers**

---

## 🌍 Mission

Atlas ERA is a research association and community of practice focused on designing, studying, and scaling alternative education models for neurodivergent and mobile learners. We bridge academic rigor with lived experience to create evidence-based frameworks for learning ecosystems that prioritize student agency, cultural responsiveness, and family mobility.

### Our North Star
Create a global association of worldschooling educators and researchers who collaboratively advance the field through:
- 🔬 Shared research infrastructure (measurement tools, longitudinal studies)
- 🌐 Cross-border knowledge exchange and peer learning  
- 📊 Community-centered evaluation frameworks
- 📚 Public scholarship accessible to families and practitioners

---

## 🧩 How Atlas ERA Fits the Ecosystem

Atlas ERA serves as the **research backbone** for a portfolio of mission-driven ventures:

| Venture | Atlas ERA's Role |
|---------|-----------------|
| **[Feelings Unplugged](https://feelingsunplugged.com)** | Evidence generation for teen mental health interventions |
| **[Measurement Ally](https://measurementally.com)** | Research methodologies + assessment frameworks |
| **BASE Framework** | Theoretical grounding + outcome measurement |
| **Global Curriculum Estates** | Learning environment design + efficacy studies |
| **[BeaRita Foundation](https://bearita.org)** | Community-centered research partnerships |

This web application is the **public face** of our research pillars and membership network.

---

## 🎯 Research Focus Areas

### 1. **Worldschooling Pedagogies**
How do families integrate travel, cultural immersion, and self-directed learning? What frameworks support educational continuity across borders?

**Questions We Study:**
- Learning trajectories of mobile vs. place-based students
- Cultural competence development through immersion
- Family decision-making around educational sovereignty

### 2. **Neurodivergent Learning Ecosystems**  
Designing trauma-informed, sensory-responsive environments that center ADHD/autistic brilliance rather than pathologize difference.

**Questions We Study:**
- Universal Design for Learning in alternative settings
- Sensory accommodations in family-based education
- Social-emotional development outside traditional peer structures

### 3. **Mobile Learning Infrastructures**
Digital tools, asynchronous community, and portable credentialing for families who reject traditional schooling.

**Questions We Study:**
- Technology-mediated learning for distributed families
- Digital badging and competency-based assessment
- Asynchronous collaboration models

### 4. **Community-Centered Evaluation**
Measurement approaches that honor non-traditional learning paths and family sovereignty over educational decisions.

**Questions We Study:**
- Participatory action research with marginalized communities
- Non-deficit assessment frameworks
- Longitudinal outcomes of alternative education

### 5. **Global Collaborations**
Building sustainable international partnerships between researchers, practitioners, and worldschooling networks.

**Questions We Study:**
- Knowledge mobilization across cultural contexts
- Cross-national policy analysis
- Research infrastructure for distributed teams

---

## 🏗️ Technical Implementation

### Tech Stack

**Frontend**
- React 18.2 - Component-based UI library
- Vite 5.0 - Fast build tool with HMR
- React Router 6 - Client-side routing
- TailwindCSS - Utility-first styling
- Recharts - Data visualization

**Backend** (Planned Q2 2026)
- Node.js + Express OR Python FastAPI
- PostgreSQL - Relational database
- Firebase - Real-time data + authentication
- Stripe - Payment processing

**Infrastructure**
- Vercel - Frontend hosting + edge functions
- GitHub Actions - CI/CD pipeline
- Cloudflare - CDN + DDoS protection

### Architecture Overview

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

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for detailed system design.

### Planned Integrations
- **Google Drive**: Research library sync
- **Notion**: Content management
- **Stripe**: Membership payments
- **SendGrid**: Email automation
- **Mixpanel/PostHog**: Analytics

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- npm 9+ (comes with Node.js)

### Installation

```bash
# Clone repository
git clone https://github.com/eltphd/atlasera.git
cd atlasera

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build
npm test         # Run unit tests
npm run lint     # Check code quality
npm run format   # Auto-format code
```

---

## 📁 Project Structure

```
atlasera/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── navigation/      # Header, nav menu
│   │   ├── pillars/         # Research pillar cards
│   │   ├── membership/      # Tier comparison, forms
│   │   └── layout/          # Hero, footer, wrappers
│   ├── pages/               # Route-level components
│   ├── utils/               # Helper functions
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── research-tools/          # Research methodology code
│   ├── longitudinal-analysis/  # LCA/LTA implementations
│   └── survey-automation/      # Data pipeline scripts
├── docs/                    # Technical documentation
│   ├── ARCHITECTURE.md      # System design
│   ├── DATA_MODEL.md        # Database schema
│   ├── API_SPEC.md          # API endpoints
│   └── MEASUREMENT_FRAMEWORK.md  # Research methods
├── public/                  # Static assets
├── .github/workflows/       # CI/CD configuration
└── package.json             # Dependencies + scripts
```

---

## 🌐 Organizational Structure

Atlas ERA operates through two legal entities to maximize global impact:

### 🇲🇹 Atlas ERA Malta Foundation
- 501(c)(3) equivalent nonprofit status
- Research grants and philanthropic partnerships
- Tax-deductible donations for U.S. contributors
- Fiscal sponsorship for early-stage researchers

### 🇫🇷 Atlas ERA France Association  
- Loi 1901 nonprofit structure
- European base for Global Curriculum Estates
- Montpellier as pilot site for worldschooling community
- Partnerships with French edtech networks

**This dual structure enables:**
✅ Cross-border fundraising and grant eligibility  
✅ European visa pathways for researcher mobility  
✅ Tax advantages in multiple jurisdictions

---

## 🤝 Join the Network

Atlas ERA is building a **global community of practice** for:

- 🌍 Worldschooling families documenting their pedagogical innovations
- 🔬 Researchers studying alternative education and neurodivergent learning
- 🏫 Educators designing trauma-informed, student-centered environments  
- 💻 Technologists building tools for distributed learning communities

### Membership Tiers

| Tier | Price | Who It's For |
|------|-------|-------------|
| **Practitioner** | $15/mo | Worldschooling families, alternative educators |
| **Researcher** | $25/mo | PhD students, postdocs, independent scholars |
| **Institutional** | Custom | Universities, foundations, NGOs |
| **Founding Circle** | $100/mo | Early supporters shaping research agenda |

**[Join the Waitlist →](https://forms.gle/atlasera)** *(Beta launch Q1 2026)*

---

## 📊 Roadmap

### Q1 2026
- ✅ Website launch (current)
- 🔄 Member portal beta (auth, profiles, forums)
- 🔄 Research library v1 (semantic search, tagging)

### Q2 2026
- API development (REST + GraphQL)
- Payment integration (Stripe)
- Admin dashboard (content management)
- First cohort of Researcher members

### Q3 2026
- Mobile app (React Native)
- Collaborative research tools
- Conference travel grant program
- First published research from network

### Q4 2026
- Institutional partnerships (5+ universities)
- Global Curriculum Estates pilot (Montpellier)
- Measurement Ally integration
- 500+ total members

---

## 🔬 Research Tools & Methodology

This repository includes **production-ready research code** demonstrating our methodological approach:

### `/research-tools/longitudinal-analysis`
- Latent Class Analysis (LCA) implementations
- Latent Transition Analysis (LTA) for tracking change over time  
- Model comparison and class profiling scripts
- **Language**: Python (scikit-learn) + R (poLCA)

### `/research-tools/survey-automation`
- Google Forms → Analysis pipeline
- Likert scale recoding and data cleaning
- Automated quality checks
- **Language**: R (googlesheets4, tidyverse)

See [docs/MEASUREMENT_FRAMEWORK.md](docs/MEASUREMENT_FRAMEWORK.md) for full methodology.

---

## 🧪 Contributing

We welcome contributions from developers, researchers, and educators!

### Development Workflow

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Install dependencies (`npm install`)
4. Make changes and test (`npm test`)
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
6. Push to branch (`git push origin feature/amazing-feature`)
7. Open Pull Request

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for detailed guidelines.

### Code Quality Standards
- ✅ ESLint + Prettier (auto-format on commit)
- ✅ PropTypes for React components
- ✅ Unit tests for utilities
- ✅ Responsive design (mobile-first)

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 📬 Contact & Support

- **Email**: research@atlasera.org
- **Website**: [atlasera.org](https://atlasera.org) *(coming soon)*
- **GitHub Issues**: [Report bugs or request features](https://github.com/eltphd/atlasera/issues)
- **Twitter**: [@atlasera_org](https://twitter.com/atlasera_org) *(coming soon)*

For partnership inquiries: partnerships@atlasera.org

---

## 🙏 Acknowledgments

Atlas ERA builds on the work of:
- Dr. Erica L. Tartt's dissertation research (UCSB, 2024)
- Worldschooling networks across 40+ countries
- Neurodivergent educators and advocates
- Open science and participatory research communities

---

**Built with ❤️ for the worldschooling community**
