// TODO:
// Data Engineering, Data Science, ML Engineering, Athletics, Analytics, ... ?

const tools = [
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Dev', 'Languages', 'Javascript'],
  },

  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Dev', 'Javascript'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Dev', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Google Cloud',
    competency: 2,
    category: ['Web Dev'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Web Dev', 'Databases'],
  },
  {
    title: 'Docker/Containers',
    competency: 2.5,
    category: ['Data Science'],
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
    category: [],
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
    category: ['IoT/Robotics'],
  },
  {
    title: 'nVidia Jetson Nano',
    competency: 2,
    category: ['IoT/Robotics'],
  },
  {
    title: 'Arduino',
    competency: 2,
    category: ['IoT/Robotics'],
  },
  {
    title: 'Soldering',
    competency: 3,
    category: ['IoT/Robotics'],
  },
  {
    title: 'Digital Fabrication',
    competency: 2,
    category: ['IoT/Robotics'],
  },
  {
    title: 'Prototyping',
    competency: 3,
    category: [],
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
    category: ['Data Science', 'Data Viz'],
  },
  {
    title: 'Excel, PowerQuery & Pivot Tables',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Tableau',
    competency: 2,
    category: ['Data Viz'],
  },
  {
    title: 'Grafana',
    competency: 2,
    category: ['Data Viz'],
  },
  {
    title: 'Google Data Studio',
    competency: 2,
    category: ['Data Viz'],
  },
  {
    title: 'Image: DALL-e, Stable Diffusion, Midjourney',
    competency: 4,
    category: ['AI Models'],
  },
  {
    title: 'Chat/Code: ChatGPT, Mistral, Github CoPilot',
    competency: 4,
    category: ['AI Models'],
  },
  {
    title: 'Audio: MusicGen, Stable Audio, Pedalboard, Suno, Riffusion',
    competency: 3,
    category: ['AI Models'],
  },
  {
    title: 'Blues Wireless',
    competency: 2,
    category: ['IoT/Robotics'],
  },
  {
    title: 'Particle.io',
    competency: 2,
    category: ['IoT/Robotics', 'Prototyping'],
  },
  {
    title: 'Adafruit.io',
    competency: 2,
    category: ['IoT/Robotics', 'Prototyping'],
  },
  {
    title: 'Tinkercad',
    competency: 2,
    category: ['IoT/Robotics', '3D Printing'],
  },
  {
    title: 'Fusion 360',
    competency: 2,
    category: ['IoT/Robotics', '3D Printing'],
  },
  {
    title: 'Cura',
    competency: 2,
    category: ['IoT/Robotics', '3D Printing'],
  },
  {
    title: 'Figma',
    competency: 2,
    category: ['Web Dev', 'Creative'],
  },
  {
    title: 'Adobe Creative Cloud',
    competency: 2,
    category: ['Creative'],
  },
  {
    title: 'Unity',
    competency: 2,
    category: ['Web Dev', 'Creative'],
  },
  {
    title: 'Blender',
    competency: 2,
    category: ['Creative', '3D Printing'],
  },
  {
    title: 'Adobe XD',
    competency: 2,
    category: ['Creative'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 2,
    category: ['Creative'],
  },
  {
    title: 'Adobe Illustrator',
    competency: 2,
    category: ['Creative'],
  },
  {
    title: 'Adobe Lightroom',
    competency: 2,
    category: ['Creative'],
  },
  {
    title: 'AR.js',
    competency: 1,
    category: ['Web Dev', 'Languages', 'Javascript'],
  },
  {
    title: 'nVidia Jetpack SDK',
    competency: 1,
    category: ['AI Models', 'IoT/Robotics'],
  },
  {
    title: 'nVidia DeepStream SDK',
    competency: 1,
    category: ['Computer Vision'],
  },
  {
    title: 'nVidia Tao Toolkit',
    competency: 1,
    category: ['AI Models'],
  },
  {
    title: 'Azure Data Studio',
    competency: 1,
    category: ['Data Science', 'Databases'],
  },
  {
    title: 'OpenCV',
    competency: 1,
    category: ['Data Science', 'Computer Vision'],
  },
  {
    title: 'Kepler.gl',
    competency: 1,
    category: ['Data Viz', 'Data Science'],
  },
  {
    title: 'Microsoft SandDance',
    competency: 1,
    category: ['Data Viz', 'Databases'],
  },

].map((tool) => ({ ...tool, category: tool.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#73D055FF',
  '#3CBB75FF',
  '#20A387FF',
  '#238A8DFF',
  '#2D708EFF',
  '#39568CFF',
  '#453781FF',
  '#481567FF',
  '#440154FF',
  '#3B528BFF',
  '#265889FF',
  '#1F6680FF',
  '#64cb7b',
];

const categories = [
  ...new Set(tools.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, tools };
