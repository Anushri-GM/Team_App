export type Member = {
  id: string;
  name: string;
  role: string;
  department: 'Engineering' | 'Design' | 'Product' | 'Marketing' | 'Executive' | 'AI & DS';
  collegeYear: 'I' | 'II' | 'III' | 'IV' | 'Graduate';
  year: number;
  imageUrl: string;
  skills: string[];
  children?: Member[];
};

export const orgChartData: Member = {
  id: '1',
  name: 'Alexina Jordan',
  role: 'Coordinator',
  department: 'Executive',
  collegeYear: 'IV',
  year: 2018,
  imageUrl: 'https://picsum.photos/seed/1/100/100',
  skills: ['Leadership', 'Strategic Planning', 'Project Management'],
  children: [
    {
      id: '2',
      name: 'Ben Carter',
      role: 'System Architect',
      department: 'AI & DS',
      collegeYear: 'IV',
      year: 2020,
      imageUrl: 'https://picsum.photos/seed/2/100/100',
      skills: ['React', 'Node.js', 'System Architecture'],
      children: [
        { id: '3', name: 'Casey Dyer', role: 'Frontend Developer', department: 'AI & DS', collegeYear: 'II', year: 2022, imageUrl: 'https://picsum.photos/seed/3/100/100', skills: ['Frontend', 'TypeScript'] },
        { id: '4', name: 'Drew Evans', role: 'Backend Developer', department: 'AI & DS', collegeYear: 'I', year: 2023, imageUrl: 'https://picsum.photos/seed/4/100/100', skills: ['Backend', 'Go'] },
        { id: '5', name: 'Eli Fisher', role: 'DevOps Engineer', department: 'AI & DS', collegeYear: 'II', year: 2022, imageUrl: 'https://picsum.photos/seed/5/100/100', skills: ['DevOps', 'AWS'] },
      ],
    },
    {
      id: '6',
      name: 'Frankie Gibbs',
      role: 'UI/UX Lead',
      department: 'AI & DS',
      collegeYear: 'IV',
      year: 2019,
      imageUrl: 'https://picsum.photos/seed/6/100/100',
      skills: ['UI/UX', 'Figma', 'User Research'],
      children: [
        { id: '7', name: 'Gray Harris', role: 'Illustrator', department: 'AI & DS', collegeYear: 'III', year: 2021, imageUrl: 'https://picsum.photos/seed/7/100/100', skills: ['Illustration', 'Prototyping'] },
        { id: '8', name: 'Harley Ives', role: 'Interaction Designer', department: 'AI & DS', collegeYear: 'II', year: 2022, imageUrl: 'https://picsum.photos/seed/8/100/100', skills: ['Interaction Design', 'Animation'] },
        { id: '9', name: 'Indigo Jones', role: 'Visual Designer', department: 'AI & DS', collegeYear: 'I', year: 2023, imageUrl: 'https://picsum.photos/seed/9/100/100', skills: ['Visual Design', 'Branding'] },
      ],
    },
    {
      id: '10',
      name: 'Jamie King',
      role: 'Product Lead',
      department: 'AI & DS',
      collegeYear: 'III',
      year: 2021,
      imageUrl: 'https://picsum.photos/seed/10/100/100',
      skills: ['Product Strategy', 'Roadmapping', 'Agile'],
      children: [
        { id: '11', name: 'Kai Lopez', role: 'Market Analyst', department: 'AI & DS', collegeYear: 'II', year: 2022, imageUrl: 'https://picsum.photos/seed/11/100/100', skills: ['Market Analysis', 'User Stories'] },
        { id: '12', name: 'Lane Morgan', role: 'Data Analyst', department: 'AI & DS', collegeYear: 'I', year: 2023, imageUrl: 'https://picsum.photos/seed/12/100/100', skills: ['Data Analysis', 'A/B Testing'] },
        { id: '13', name: 'Morgan Nelson', role: 'UX Writer', department: 'AI & DS', collegeYear: 'II', year: 2022, imageUrl: 'https://picsum.photos/seed/13/100/100', skills: ['UX Writing', 'Customer Interviews'] },
      ],
    },
    {
      id: '14',
      name: 'Nico Olsen',
      role: 'Marketing Lead',
      department: 'AI & DS',
      collegeYear: 'IV',
      year: 2020,
      imageUrl: 'https://picsum.photos/seed/14/100/100',
      skills: ['Content Strategy', 'SEO', 'Social Media'],
      children: [
        { id: '15', name: 'Parker Quinn', role: 'PPC Specialist', department: 'AI & DS', collegeYear: 'III', year: 2021, imageUrl: 'https://picsum.photos/seed/15/100/100', skills: ['PPC Campaigns', 'Email Marketing'] },
        { id: '16', name: 'Quinn Roberts', role: 'Copywriter', department: 'AI & DS', collegeYear: 'I', year: 2023, imageUrl: 'https://picsum.photos/seed/16/100/100', skills: ['Copywriting', 'Analytics'] },
        { id: '17', name: 'Riley Smith', role: 'Community Manager', department: 'AI & DS', collegeYear: 'II', year: 2022, imageUrl: 'https://picsum.photos/seed/17/100/100', skills: ['Community Management', 'Video Production'] },
      ],
    },
  ],
};


export const projectDetails = JSON.stringify([
  {
    projectName: "Project Alpha",
    team: ["Ben Carter", "Casey Dyer", "Drew Evans", "Gray Harris"],
    skillsUsed: ["React", "Node.js", "Frontend", "Backend", "Illustration"],
    duration: "3 months",
  },
  {
    projectName: "Project Beta",
    team: ["Frankie Gibbs", "Harley Ives", "Indigo Jones", "Kai Lopez"],
    skillsUsed: ["UI/UX", "Figma", "Interaction Design", "Market Analysis"],
    duration: "4 months",
  },
  {
    projectName: "Project Gamma",
    team: ["Jamie King", "Lane Morgan", "Nico Olsen", "Parker Quinn"],
    skillsUsed: ["Product Strategy", "Data Analysis", "SEO", "PPC Campaigns"],
    duration: "6 months",
  },
  {
    projectName: "Internal Tooling",
    team: ["Eli Fisher", "Morgan Nelson", "Riley Smith"],
    skillsUsed: ["DevOps", "AWS", "UX Writing", "Video Production"],
    duration: "Ongoing",
  }
], null, 2);
