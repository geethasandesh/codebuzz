export const navLinks = [
  { label: 'Programs', href: '#tracks' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
]

export const heroBullets = [
  'Live mentor-led sessions',
  'Real AI/ML projects',
  '24/7 learning support',
]

export const painPoints = [
  {
    title: 'Not sure where to start in AI?',
    body: 'Get a clear layered path from Python fundamentals to production AI systems.',
  },
  {
    title: 'Watching videos but not building?',
    body: 'Apply every concept through projects, assessments, and real workflows.',
  },
  {
    title: 'Overwhelmed by endless resources?',
    body: 'Follow a structured curriculum designed for career-ready AI/ML skills.',
  },
  {
    title: 'Stuck without feedback?',
    body: 'Get mentor guidance, doubt-clearing, and community support anytime.',
  },
  {
    title: 'Need industry-relevant skills?',
    body: 'Learn from mentors with experience at Amazon, Microsoft, Salesforce, and more.',
  },
  {
    title: 'Want accountability & direction?',
    body: 'Stay motivated with progress tracking, live classes, and career guidance.',
  },
]

export const tracks = [
  { id: '01', title: 'AI Engineer', subtitle: 'Build real systems' },
  { id: '02', title: 'Data Scientist', subtitle: 'Analyse complex data' },
  { id: '03', title: 'AI Product Manager', subtitle: 'Analyze & predict' },
  { id: '04', title: 'ML Ops', subtitle: 'Model concepts' },
  { id: '05', title: 'Data Engineer', subtitle: 'Intelligence concepts' },
]

export const curriculum = [
  {
    week: 'Layer 01',
    module: 'Foundation',
    title: 'Core Skills',
    summary:
      'Build strong programming and engineering fundamentals before diving into ML systems.',
    items: [
      { label: 'Python & SQL', text: 'Write clean code and query data confidently.' },
      { label: 'Data Handling', text: 'Clean, transform, and explore real datasets.' },
      { label: 'Math for ML', text: 'Statistics and intuition that power models.' },
      { label: 'Cloud Basics', text: 'Git, Linux, and cloud fundamentals for builders.' },
    ],
  },
  {
    week: 'Layer 02',
    module: 'Intermediate',
    title: 'Applied AI / ML',
    summary:
      'Apply ML concepts to real-world systems with training, design, and deployment basics.',
    items: [
      { label: 'ML Algorithms', text: 'Train and evaluate models that solve real problems.' },
      { label: 'System Design', text: 'Think in products, pipelines, and trade-offs.' },
      { label: 'MLOps', text: 'Ship models with practical deployment workflows.' },
      { label: 'Projects', text: 'Build portfolio-ready applied AI work.' },
    ],
  },
  {
    week: 'Layer 03',
    module: 'Expert',
    title: 'Advanced AI',
    summary:
      'Build scalable, production-ready AI solutions with modern architectures and agents.',
    items: [
      { label: 'Generative AI', text: 'Work with LLMs, agents, and generative workflows.' },
      { label: 'Architectures', text: 'Design advanced and multi-modal AI systems.' },
      { label: 'Scale', text: 'Make solutions reliable, measurable, and production-ready.' },
      { label: 'Career Edge', text: 'Present skills with confidence and clarity.' },
    ],
  },
]

export const supportItems = [
  {
    title: 'Mentor Support',
    body: '1:1 guidance from industry mentors when you get stuck.',
  },
  {
    title: 'Chat & Community',
    body: 'Learn with peers, share blockers, and grow together.',
  },
  {
    title: 'WhatsApp Support',
    body: 'Quick help when you need answers outside class hours.',
  },
]

export const companies = [
  'Amazon',
  'Microsoft',
  'Hulu',
  'Salesforce',
  'AT&T',
  'TransUnion',
]

export const team = [
  {
    name: 'Saneeta Narrlla',
    role: 'Founder & Technologist — Data • Security • AI Education',
  },
  {
    name: 'Siddharth Pothukuchi',
    role: 'AI/ML Engineer — IIT Bhilai & Purdue University Graduate',
  },
  {
    name: 'Ravi Doddasomayajula',
    role: 'Tech Lead & Mentor — MS Georgia Tech, PhD George Mason',
  },
  {
    name: 'Dilip Yeluguri',
    role: 'Data and Finance @ CodeBuzz',
  },
  {
    name: 'Vijay Chakilam',
    role: 'Founder @ Kooper — MS Quantitative Analysis',
  },
]

export const testimonials = [
  {
    name: 'Lauren',
    role: 'Software Designer',
    quote:
      'CodeBuzz guided me from basic to advanced concepts with clear lessons and assessments. The quizzes helped me validate what I learned instead of just watching videos.',
  },
  {
    name: 'Rishi Shah',
    role: 'Software Engineer',
    quote:
      'I started with almost no technical background. The structured courses and progress dashboard kept me motivated to continue learning every day.',
  },
  {
    name: 'Fiona Serre',
    role: 'Designer',
    quote:
      'Live classes were extremely helpful. Every session was recorded, so I could revisit difficult topics later around my busy schedule.',
  },
  {
    name: 'Ria Manek',
    role: 'Software Developer',
    quote:
      "CodeBuzz didn't just teach me concepts — it built my confidence. Video lessons, assessments, and tracking made learning feel purposeful.",
  },
  {
    name: 'Jacob Jones',
    role: 'Product Designer',
    quote:
      'The community features are a game changer. Discussing problems with peers and mentors in real-time helped me unblock myself quickly.',
  },
  {
    name: 'Esther Howard',
    role: 'Front-end Developer',
    quote:
      'I appreciated the project-based approach. Building real applications helped me create portfolio-ready work for my first junior role.',
  },
]

export const notForYou = [
  'People expecting guaranteed jobs or placements',
  'Those skipping practice, projects, or mentor sessions',
  'Learners who only want theory with no application',
  'Anyone looking for fully passive, zero-effort learning',
  'People unwilling to build real AI/ML projects',
]

export const forYou = [
  'Beginners who want a clear AI/ML path',
  'Career switchers building practical tech skills',
  'Professionals leveling up into applied AI',
  'Learners who want mentorship and community',
  'Builders who want portfolio-ready projects',
]

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Free',
    blurb: 'Explore the platform and core learning paths',
    features: [
      'Access to foundation modules',
      'Community learning access',
      'Progress dashboard',
      'Sample assessments',
      'Email support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$49',
    period: '/mo',
    blurb: 'Full learning experience with mentor support',
    featured: true,
    features: [
      'All AI/ML learning layers',
      'Live instructor-led sessions',
      'Mentor & doubt-clearing support',
      'Project reviews',
      'Recordings for revision',
      'Career guidance basics',
    ],
  },
  {
    id: 'team',
    name: 'Team',
    price: 'Custom',
    blurb: 'For cohorts, companies, and group learning',
    features: [
      'Everything in Pro',
      'Dedicated mentor pods',
      'Custom curriculum tracks',
      'Team progress reporting',
      'Priority support',
    ],
  },
]

export const faqs = [
  {
    q: 'Do you guarantee jobs or placements?',
    a: "We don't make unrealistic promises. What we do provide is strong skill-building, real projects, and career guidance that genuinely improves readiness and confidence.",
  },
  {
    q: 'How are classes conducted?',
    a: 'Live, instructor-led sessions with interactive discussions, real-time coding, project walkthroughs, and access to recordings for revision.',
  },
  {
    q: 'What kind of support do learners get?',
    a: "Instructor guidance, mentorship sessions, doubt-clearing support, and career direction advice. You're never learning alone at CodeBuzz.",
  },
  {
    q: 'Who is CodeBuzz best for?',
    a: 'Beginners, career switchers, and professionals who want structured AI/ML learning with mentors, community, and hands-on projects.',
  },
]

export const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '200+', label: 'Expert Courses' },
  { value: '95%', label: 'Success Rate' },
  { value: '24/7', label: 'Support Available' },
]
