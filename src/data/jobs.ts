
import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features using React and TypeScript.',
    requirements: [
      'Proficient in React, TypeScript, and modern JavaScript',
      '3+ years of frontend development experience',
      'Experience with state management libraries (Redux, Zustand, etc.)',
      'Strong understanding of responsive design principles',
      'Familiarity with testing frameworks (Jest, React Testing Library)'
    ],
    postedDate: '2023-06-15',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=250&h=250&fit=crop&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'New York, NY',
    salary: '$110,000 - $140,000',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Join our backend team to design and implement scalable APIs and services. You will work with our cloud infrastructure and help optimize our data processing pipelines.',
    requirements: [
      'Strong experience with Node.js or Python',
      'Knowledge of database systems (SQL and NoSQL)',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Understanding of microservices architecture',
      'Ability to write clean, maintainable code'
    ],
    postedDate: '2023-06-10',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'CreativeMinds',
    location: 'Remote',
    salary: '$85,000 - $110,000',
    type: 'Remote',
    experience: 'Mid Level',
    description: 'We are seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our products. You will collaborate with product managers and developers to deliver exceptional user experiences.',
    requirements: [
      'Portfolio demonstrating strong UI/UX skills',
      'Proficiency in design tools (Figma, Sketch, Adobe XD)',
      'Understanding of user-centered design principles',
      'Experience conducting user research and usability testing',
      'Ability to create wireframes, prototypes, and high-fidelity designs'
    ],
    postedDate: '2023-06-05',
    logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=250&h=250&fit=crop&q=80',
    featured: true
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudNative',
    location: 'Austin, TX',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Join our DevOps team to build and maintain our cloud infrastructure. You will automate deployment processes and ensure the reliability and scalability of our systems.',
    requirements: [
      'Experience with infrastructure as code (Terraform, CloudFormation)',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Familiarity with CI/CD pipelines',
      'Understanding of cloud services (AWS, GCP, or Azure)',
      'Strong scripting skills (Bash, Python)'
    ],
    postedDate: '2023-06-02',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Boston, MA',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'We are looking for a Data Scientist to analyze complex data sets and develop machine learning models. You will work with cross-functional teams to derive insights and drive business decisions.',
    requirements: [
      'Strong background in statistics and machine learning',
      'Proficiency in Python and data analysis libraries',
      'Experience with data visualization tools',
      'Knowledge of SQL and database systems',
      'Ability to communicate complex findings to non-technical stakeholders'
    ],
    postedDate: '2023-05-28',
    logo: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '6',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Seattle, WA',
    salary: '$115,000 - $145,000',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Join our product team to lead the development of innovative solutions. You will work closely with designers, engineers, and stakeholders to define product vision and roadmap.',
    requirements: [
      'Experience in product management for technology products',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities',
      'Understanding of agile development methodologies',
      'Ability to prioritize features and make data-driven decisions'
    ],
    postedDate: '2023-05-25',
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=250&h=250&fit=crop&q=80',
    featured: true
  },
  {
    id: '7',
    title: 'Mobile Developer',
    company: 'AppWorks',
    location: 'Chicago, IL',
    salary: '$95,000 - $125,000',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'We are seeking a Mobile Developer to build and maintain our iOS and Android applications. You will work with our design and backend teams to deliver seamless mobile experiences.',
    requirements: [
      'Experience with React Native or Flutter',
      'Knowledge of native iOS or Android development',
      'Understanding of mobile UI/UX principles',
      'Familiarity with RESTful APIs and data integration',
      'Ability to optimize app performance and troubleshoot issues'
    ],
    postedDate: '2023-05-20',
    logo: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '8',
    title: 'QA Engineer',
    company: 'QualitySoft',
    location: 'Denver, CO',
    salary: '$80,000 - $100,000',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Join our QA team to ensure the quality of our software products. You will design and execute test plans, identify bugs, and collaborate with developers to resolve issues.',
    requirements: [
      'Experience with manual and automated testing',
      'Knowledge of testing methodologies and best practices',
      'Familiarity with test management tools',
      'Attention to detail and problem-solving skills',
      'Basic understanding of web and mobile technologies'
    ],
    postedDate: '2023-05-18',
    logo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '9',
    title: 'Technical Writer',
    company: 'DocuTech',
    location: 'Remote',
    salary: '$70,000 - $90,000',
    type: 'Remote',
    experience: 'Entry Level',
    description: 'We are looking for a Technical Writer to create clear and concise documentation for our software products. You will work with engineers to understand complex systems and explain them in user-friendly terms.',
    requirements: [
      'Strong writing and editing skills',
      'Ability to understand and explain technical concepts',
      'Experience with documentation tools and platforms',
      'Attention to detail and organizational skills',
      'Basic understanding of software development processes'
    ],
    postedDate: '2023-05-15',
    logo: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '10',
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    location: 'Washington, DC',
    salary: '$105,000 - $135,000',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Join our security team to protect our systems and data from cyber threats. You will monitor security measures, conduct vulnerability assessments, and respond to security incidents.',
    requirements: [
      'Experience in cybersecurity and threat detection',
      'Knowledge of security frameworks and best practices',
      'Familiarity with security tools and technologies',
      'Understanding of network security principles',
      'Relevant security certifications (CISSP, CEH, etc.)'
    ],
    postedDate: '2023-05-10',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=250&h=250&fit=crop&q=80',
    featured: true
  },
  {
    id: '11',
    title: 'Marketing Specialist',
    company: 'GrowthHackers',
    location: 'Los Angeles, CA',
    salary: '$75,000 - $95,000',
    type: 'Part-time',
    experience: 'Mid Level',
    description: 'We are seeking a Marketing Specialist to help grow our brand and acquire new customers. You will develop and execute marketing campaigns across various channels.',
    requirements: [
      'Experience in digital marketing and campaign management',
      'Knowledge of SEO, SEM, and social media marketing',
      'Analytical skills to measure and optimize campaign performance',
      'Creative thinking and strong communication abilities',
      'Familiarity with marketing automation tools'
    ],
    postedDate: '2023-05-05',
    logo: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '12',
    title: 'HR Manager',
    company: 'PeopleFirst',
    location: 'Miami, FL',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Join our HR team to oversee recruitment, employee relations, and organizational development. You will work closely with leadership to build and maintain a positive company culture.',
    requirements: [
      'Experience in HR management and employee relations',
      'Knowledge of labor laws and compliance requirements',
      'Strong interpersonal and conflict resolution skills',
      'Ability to develop and implement HR policies and programs',
      'Experience with HRIS and recruitment platforms'
    ],
    postedDate: '2023-05-01',
    logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '13',
    title: 'Content Creator',
    company: 'MediaMakers',
    location: 'Remote',
    salary: '$60,000 - $80,000',
    type: 'Contract',
    experience: 'Entry Level',
    description: 'We are looking for a creative Content Creator to produce engaging content for our digital platforms. You will develop articles, videos, and social media posts that resonate with our audience.',
    requirements: [
      'Strong writing and storytelling skills',
      'Experience creating content for digital platforms',
      'Familiarity with content management systems',
      'Basic understanding of SEO principles',
      'Ability to adapt tone and style for different audiences'
    ],
    postedDate: '2023-04-28',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '14',
    title: 'Financial Analyst',
    company: 'WealthWise',
    location: 'Charlotte, NC',
    salary: '$85,000 - $110,000',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'Join our finance team to analyze financial data and provide insights for business decisions. You will prepare financial reports, forecasts, and budgets to support our growth strategy.',
    requirements: [
      'Strong analytical and financial modeling skills',
      'Experience with financial analysis and reporting',
      'Proficiency in Excel and financial software',
      'Knowledge of accounting principles and financial statements',
      'Ability to communicate complex financial information clearly'
    ],
    postedDate: '2023-04-25',
    logo: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '15',
    title: 'Customer Success Manager',
    company: 'ClientCare',
    location: 'Portland, OR',
    salary: '$80,000 - $100,000',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'We are seeking a Customer Success Manager to ensure our clients achieve their goals using our products. You will build relationships with key accounts and drive customer satisfaction and retention.',
    requirements: [
      'Experience in customer success or account management',
      'Strong communication and relationship-building skills',
      'Ability to understand customer needs and provide solutions',
      'Knowledge of CRM systems and customer success metrics',
      'Problem-solving skills and proactive approach to customer issues'
    ],
    postedDate: '2023-04-20',
    logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=250&h=250&fit=crop&q=80',
    featured: true
  },
  {
    id: '16',
    title: 'Graphic Designer',
    company: 'VisualArts',
    location: 'Atlanta, GA',
    salary: '$70,000 - $90,000',
    type: 'Part-time',
    experience: 'Mid Level',
    description: 'Join our creative team to design visual assets for our brand and marketing campaigns. You will create graphics, illustrations, and layouts that communicate our message effectively.',
    requirements: [
      'Strong portfolio demonstrating graphic design skills',
      'Proficiency in Adobe Creative Suite',
      'Experience with brand identity and visual communication',
      'Understanding of design principles and typography',
      'Ability to work within brand guidelines while being creative'
    ],
    postedDate: '2023-04-15',
    logo: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '17',
    title: 'Sales Representative',
    company: 'GrowthForce',
    location: 'Dallas, TX',
    salary: '$60,000 - $90,000 + Commission',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'We are looking for a motivated Sales Representative to join our team. You will identify and pursue new business opportunities, build relationships with prospects, and close deals.',
    requirements: [
      'Strong communication and negotiation skills',
      'Self-motivated with a results-driven approach',
      'Ability to understand customer needs and provide solutions',
      'Experience with CRM systems and sales processes',
      'Resilience and positive attitude in a competitive environment'
    ],
    postedDate: '2023-04-10',
    logo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '18',
    title: 'Project Manager',
    company: 'DeliverPro',
    location: 'Minneapolis, MN',
    salary: '$95,000 - $125,000',
    type: 'Full-time',
    experience: 'Senior Level',
    description: 'Join our team to lead complex projects from initiation to completion. You will coordinate resources, manage timelines, and ensure project goals are met within budget.',
    requirements: [
      'Experience managing technology projects',
      'Knowledge of project management methodologies (Agile, Scrum)',
      'Strong leadership and team coordination skills',
      'Ability to manage stakeholder expectations',
      'Problem-solving skills and adaptability to changing requirements'
    ],
    postedDate: '2023-04-05',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=250&h=250&fit=crop&q=80',
    featured: true
  },
  {
    id: '19',
    title: 'Network Administrator',
    company: 'ConnectTech',
    location: 'Phoenix, AZ',
    salary: '$85,000 - $110,000',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'We are seeking a Network Administrator to maintain and optimize our IT infrastructure. You will ensure network security, reliability, and performance for our organization.',
    requirements: [
      'Experience with network administration and troubleshooting',
      'Knowledge of network protocols and technologies',
      'Familiarity with network security best practices',
      'Understanding of cloud infrastructure',
      'Relevant certifications (CCNA, Network+, etc.)'
    ],
    postedDate: '2023-04-01',
    logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=250&h=250&fit=crop&q=80',
    featured: false
  },
  {
    id: '20',
    title: 'Business Analyst',
    company: 'InsightPartners',
    location: 'Philadelphia, PA',
    salary: '$80,000 - $105,000',
    type: 'Full-time',
    experience: 'Mid Level',
    description: 'Join our team to analyze business processes and identify opportunities for improvement. You will gather requirements, document workflows, and recommend solutions to enhance efficiency.',
    requirements: [
      'Experience in business analysis and requirements gathering',
      'Strong analytical and problem-solving skills',
      'Excellent documentation and communication abilities',
      'Knowledge of process modeling and analysis techniques',
      'Ability to bridge the gap between business needs and technical solutions'
    ],
    postedDate: '2023-03-28',
    logo: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=250&h=250&fit=crop&q=80',
    featured: false
  }
];