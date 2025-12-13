# Atlas ERA - Global Worldschooling Education Research Network

**Web application** and research infrastructure for studying neurodivergent learning ecosystems across international worldschooling communities.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

---

## 🎯 Overview

Atlas ERA (Education Research Academy) is a **global network** connecting worldschooling families, neurodivergent learners, and education researchers to study alternative learning pathways outside traditional school systems.

**Mission:** Document and validate neurodivergent-optimized learning approaches that thrive in flexible, self-directed worldschooling environments.

**Research Questions:**
- How do neurodivergent students thrive when freed from traditional school constraints?
- What learning patterns emerge in self-directed, travel-based education?
- How can we measure growth beyond standardized testing?

---

## 🌍 What is Worldschooling?

**Worldschooling** combines homeschooling with international travel, using the world as a classroom. Families live nomadically (or slow-travel), immersing children in diverse cultures, languages, and real-world learning experiences.

**Why neurodivergent learners thrive:**
- Flexible pacing (no rigid schedules)
- Interest-driven curriculum (deep dives into passions)
- Reduced sensory overwhelm (vs. classroom environments)
- Executive function support from family
- Real-world context (math through currency conversion, history through visiting sites)

---

## 🛠️ Technical Stack

**Frontend:**
- React 18 (UI components)
- JavaScript ES6+
- Responsive design for mobile-first families

**Backend (Planned):**
- Python (Django/Flask) for research data pipelines
- PostgreSQL for longitudinal learner tracking
- RESTful APIs for survey administration

**Research Tools:**
- Latent transition analysis (LTA) for trajectory modeling
- Survey automation (Google Forms → Python → Analytics)
- Longitudinal measurement frameworks

---

## 📊 Repository Structure

```
atlasera/
├── src/
│   ├── components/         # React UI components
│   ├── pages/              # Application routes
│   ├── services/           # API integrations
│   └── utils/              # Helper functions
├── research-tools/
│   ├── lta-pipeline/       # Latent transition analysis
│   ├── survey-automation/  # Data collection workflows
│   └── measurement/        # Assessment frameworks
├── docs/
│   ├── architecture.md     # System design
│   ├── research-methods.md # Methodology overview
│   └── user-guide.md       # For families & researchers
├── tests/
└── README.md
```

---

## 🚀 Vision

### For Families
- Connect with other worldschooling families globally
- Document learning journeys with evidence-based frameworks
- Access neurodivergent-friendly learning resources
- Participate in research (optional, ethical consent)

### For Researchers
- Longitudinal data on alternative learning pathways
- Community-centered research methods
- Reproducible measurement pipelines
- Open-source research tools

### For Educators
- Evidence for policy advocacy (homeschool regulations)
- Curriculum design insights from successful learners
- Neurodivergent pedagogy best practices

---

## 🔬 Research Infrastructure

### Measurement Frameworks
- **Learning Progress:** Skills-based portfolios (vs. grade levels)
- **Well-being:** Mental health, executive function, sensory regulation
- **Social Development:** Cross-cultural competence, community engagement
- **Academic Readiness:** Self-directed learning capacity, metacognition

### Longitudinal Tracking
```python
# Example: Track learner trajectory over 2 years
from atlas_research import LearnerProfile, LTA

profile = LearnerProfile(learner_id="ANON123")
trajectory = LTA.fit_trajectory(
    assessments=profile.get_assessments(),
    time_points=[0, 6, 12, 18, 24],  # months
    latent_classes=4  # e.g., "Rapid Growth", "Steady Progress", etc.
)

print(trajectory.predicted_class)  # "Rapid Growth"
print(trajectory.probability)       # 0.87 (87% confidence)
```

---

## 🤝 Partnerships

**Atlas ERA Foundation** (Malta-based nonprofit)  
**Atlas ERA Association** (France-based research entity)

**Collaborating Organizations:**
- Worldschooling communities (Malta, Portugal, Mexico)
- Neurodivergent advocacy groups
- Alternative education networks

---

## 🎓 Example Learning Pathways

### Case Study: 12-Year-Old Autistic Learner
**Traditional School:** Struggled with sensory overwhelm, homework battles, rigid schedules  
**Worldschooling Year 1:**
- Deep-dived into marine biology while living in Malta (6 months)
- Self-taught Python to build a tide prediction app
- Mastered conversational Italian through daily market visits
- Built executive function skills through travel planning

**Measured Outcomes:**
- ✅ Academic skills: On-par with peers (portfolio-based assessment)
- ✅ Well-being: Anxiety decreased 60% (validated scales)
- ✅ Self-direction: Independently managed 3 long-term projects
- ✅ Social skills: Thrived in smaller, interest-based groups

---

## 📈 Research Design

**Ethics-First Approach:**
- Community-centered research (families as co-researchers)
- Opt-in participation (no coercion)
- Data sovereignty (families control their data)
- Privacy-preserving methods (anonymization, aggregation)

**Methodology:**
- Mixed methods (quantitative + qualitative)
- Longitudinal cohort studies (2-5 year tracking)
- Comparison groups (worldschoolers vs. traditional homeschoolers)
- Participatory data analysis (families interpret findings)

---

## 🚧 Development Status

**Phase 1 (Current):**
- ✅ Repository architecture designed
- ✅ Research frameworks documented
- 🚧 Web application UI development
- 🚧 Survey automation pipeline

**Phase 2 (Planned):**
- Deploy beta platform for pilot families
- Collect baseline assessments
- Build researcher dashboard

**Phase 3 (Future):**
- Publish longitudinal findings
- Open-source research tools
- Policy advocacy with evidence

---

## 🤝 Contributing

This is a **community-driven research project**. Contributions welcome from:
- 👨‍👩‍👧 **Worldschooling families** - share your experiences, test the platform
- 🔬 **Researchers** - methodology improvements, analysis tools
- 💻 **Developers** - web app features, data pipelines
- 🎨 **Designers** - neurodivergent-friendly UX

Open an issue or submit a PR!

---

## 📄 License

Research tools: MIT License  
Research data: Community Data License Agreement (CDLA)

---

## 🔗 Related Projects

- **Measurement Ally:** LTA pipeline used for trajectory analysis
- **Feelings Unplugged:** Adolescent mental health platform
- **US-SQUARED:** Nonprofit parent organization

---

## 📧 Contact

**Dr. Erica L. Tartt**  
Research Lead, Atlas ERA  
mstartt@gmail.com | [LinkedIn](https://linkedin.com/in/ericatartt) | [GitHub](https://github.com/eltphd)

---

**Building evidence for how neurodivergent learners thrive** 🌍✨
