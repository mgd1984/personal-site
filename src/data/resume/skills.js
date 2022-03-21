// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Google Cloud',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Docker/Containers',
    competency: 2.5,
    category: ['Tools', 'Data Science'],
  },
  {
    title: 'SAS/SQL',
    competency: 2.5,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'NodeRED',
    competency: 3,
    category: ['Javascript'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Git',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Google Colab/Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Circuit Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Raspberry Pi',
    competency: 3,
    category: ['Microelectronics'],
  },
  {
    title: 'nVidia Jetson Nano',
    competency: 2,
    category: ['Microelectronics'],
  },
  {
    title: 'Arduino',
    competency: 2,
    category: ['Microelectronics'],
  },
  {
    title: 'Soldering',
    competency: 3,
    category: ['Microelectronics'],
  },
  {
    title: 'Digital Fabrication',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Prototyping',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'R',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'InfluxDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Power BI',
    competency: 3.5,
    category: ['Data Science', 'Data Visualization'],
  },
  {
    title: 'Excel, PowerQuery & Pivot Tables',
    competency: 4,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
