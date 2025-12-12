// Central configuration for research pillars
import researchImg from '../../assets/research.png';
import learningImg from '../../assets/learning.png';
import knowledgeImg from '../../assets/knowledge.png';
import globalImg from '../../assets/global.png';
import innovationImg from '../../assets/innovation.png';

export const RESEARCH_PILLARS = [
  {
    id: 'research-inquiry',
    title: 'Research & Inquiry',
    shortDesc: 'Cultivating critical thinking and investigation',
    fullDesc: `How do families integrate travel, cultural immersion, and self-directed 
               learning? What frameworks support educational continuity across borders? 
               We study worldschooling pedagogies through mixed-methods research.`,
    icon: '🔬',
    image: researchImg,
    color: '#c8463c',
    keywords: ['qualitative methods', 'longitudinal studies', 'community-based participatory research']
  },
  {
    id: 'learning-ecosystems',
    title: 'Learning Ecosystems',
    shortDesc: 'Designing holistic educational environments',
    fullDesc: `Designing trauma-informed, sensory-responsive environments that center 
               ADHD/autistic brilliance rather than pathologize difference. We create 
               counter-spaces for neurodivergent thriving.`,
    icon: '🌱',
    image: learningImg,
    color: '#98b9b5',
    keywords: ['universal design for learning', 'trauma-informed practices', 'neurodivergent pedagogy']
  },
  {
    id: 'knowledge-mobilization',
    title: 'Knowledge Mobilization',
    shortDesc: 'Translating research into practice',
    fullDesc: `Measurement approaches that honor non-traditional learning paths and family 
               sovereignty over educational decisions. We build open-source tools for 
               community-centered evaluation.`,
    icon: '📊',
    image: knowledgeImg,
    color: '#00545d',
    keywords: ['community-centered evaluation', 'participatory action research', 'open science']
  },
  {
    id: 'global-collaborations',
    title: 'Global Collaborations',
    shortDesc: 'Forging partnerships across borders',
    fullDesc: `Building sustainable international partnerships between researchers, 
               practitioners, and worldschooling networks. We facilitate knowledge exchange 
               across continents and cultures.`,
    icon: '🌍',
    image: globalImg,
    color: '#0e7d87',
    keywords: ['cross-cultural research', 'international partnerships', 'knowledge networks']
  },
  {
    id: 'applied-innovation',
    title: 'Applied Innovation',
    shortDesc: 'Bridging ideas and technology for impact',
    fullDesc: `Digital tools, asynchronous community, and portable credentialing for families 
               who reject traditional schooling. We prototype the future of mobile learning 
               infrastructure.`,
    icon: '💡',
    image: innovationImg,
    color: '#f1e4c4',
    keywords: ['educational technology', 'digital credentials', 'learning analytics']
  }
];

