export type Member = {
  id: string;
  name: string;
  role: 'Coordinator' | 'Lead' | 'Member';
  department: 'Engineering' | 'Design' | 'Product' | 'Marketing' | 'Executive';
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
  year: 2018,
  imageUrl: 'https://picsum.photos/seed/1/100/100',
  skills: ['Leadership', 'Strategic Planning', 'Project Management'],
  children: [
    {
      id: '2',
      name: 'Ben Carter',
      role: 'Lead',
      department: 'Engineering',
      year: 2020,
      imageUrl: 'https://picsum.photos/seed/2/100/100',
      skills: ['React', 'Node.js', 'System Architecture'],
      children: [
        { id: '3', name: 'Casey Dyer', role: 'Member', department: 'Engineering', year: 2022, imageUrl: 'https://picsum.photos/seed/3/100/100', skills: ['Frontend', 'TypeScript'] },
        { id: '4', name: 'Drew Evans', role: 'Member', department: 'Engineering', year: 2023, imageUrl: 'https://picsum.photos/seed/4/100/100', skills: ['Backend', 'Go'] },
        { id: '5', name: 'Eli Fisher', role: 'Member', department: 'Engineering', year: 2022, imageUrl: 'https://picsum.photos/seed/5/100/100', skills: ['DevOps', 'AWS'] },
      ],
    },
    {
      id: '6',
      name: 'Frankie Gibbs',
      role: 'Lead',
      department: 'Design',
      year: 2019,
      imageUrl: 'https://picsum.photos/seed/6/100/100',
      skills: ['UI/UX', 'Figma', 'User Research'],
      children: [
        { id: '7', name: 'Gray Harris', role: 'Member', department: 'Design', year: 2021, imageUrl: 'https://picsum.photos/seed/7/100/100', skills: ['Illustration', 'Prototyping'] },
        { id: '8', name: 'Harley Ives', role: 'Member', department: 'Design', year: 2022, imageUrl: 'https://picsum.photos/seed/8/100/100', skills: ['Interaction Design', 'Animation'] },
        { id: '9', name: 'Indigo Jones', role: 'Member', department: 'Design', year: 2023, imageUrl: 'https://picsum.photos/seed/9/100/100', skills: ['Visual Design', 'Branding'] },
      ],
    },
    {
      id: '10',
      name: 'Jamie King',
      role: 'Lead',
      department: 'Product',
      year: 2021,
      imageUrl: 'https://picsum.photos/seed/10/100/100',
      skills: ['Product Strategy', 'Roadmapping', 'Agile'],
      children: [
        { id: '11', name: 'Kai Lopez', role: 'Member', department: 'Product', year: 2022, imageUrl: 'https://picsum.photos/seed/11/100/100', skills: ['Market Analysis', 'User Stories'] },
        { id: '12', name: 'Lane Morgan', role: 'Member', department: 'Product', year: 2023, imageUrl: 'https://picsum.photos/seed/12/100/100', skills: ['Data Analysis', 'A/B Testing'] },
        { id: '13', name: 'Morgan Nelson', role: 'Member', department: 'Product', year: 2022, imageUrl: 'https://picsum.photos/seed/13/100/100', skills: ['UX Writing', 'Customer Interviews'] },
      ],
    },
    {
      id: '14',
      name: 'Nico Olsen',
      role: 'Lead',
      department: 'Marketing',
      year: 2020,
      imageUrl: 'https://picsum.photos/seed/14/100/100',
      skills: ['Content Strategy', 'SEO', 'Social Media'],
      children: [
        { id: '15', name: 'Parker Quinn', role: 'Member', department: 'Marketing', year: 2021, imageUrl: 'https://picsum.photos/seed/15/100/100', skills: ['PPC Campaigns', 'Email Marketing'] },
        { id: '16', name: 'Quinn Roberts', role: 'Member', department: 'Marketing', year: 2023, imageUrl: 'https://picsum.photos/seed/16/100/100', skills: ['Copywriting', 'Analytics'] },
        { id: '17', name: 'Riley Smith', role: 'Member', department: 'Marketing', year: 2022, imageUrl: 'https://picsum.photos/seed/17/100/100', skills: ['Community Management', 'Video Production'] },
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
