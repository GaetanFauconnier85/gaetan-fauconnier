const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://GaetanFauconnier85.github.io/portfolio',
  title: 'GF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gaëtan Fauconnier',
  role: 'Développeur FullStack',
  description:
    'Ayant terminé mon école d\'ingénierie informatique à l\'EPSI Nantes, j\'ai des bases solides dans plusieurs domaines de compétence tels que React Native, Angular, et Java.',
  descriptionDeux: 'Je suis actuellement ouvert à toutes les demandes. Je suis sérieux, dynamique et motivé pour apprendre et progresser en travaillant avec des professionnels.',
  resume: 'https://www.linkedin.com/in/ga%C3%ABtan-fauconnier-2542b8154/overlay/1635526884403/single-media-viewer?type=DOCUMENT&profileId=ACoAACUQSmABvkJh_6rO97PXaWQJp4c2MzVkFbw&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BA%2FzXlrPWQDO4W2b3xTi%2FfQ%3D%3D',
  social: {
    linkedin: 'https://www.linkedin.com/in/ga%C3%ABtan-fauconnier-2542b8154/',
    github: 'https://github.com/GaetanFauconnier85',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'StreamCard',
    description:
      'StreamCard est une application permettant de collectionner des cartes de personnalités d\'internet',
    stack: ['React-Native', 'TypeScript', 'Firebase'],
  },
  {
    name: 'SECOLLAB',
    description:
      'Secollab est un projet visant à faciliter la collaboration et la communication entre les membres d\'une équipe en fournissant une plateforme en ligne sécurisée pour les discussions, les tâches et la gestion des documents',
    stack: ['Angular', 'Redux', 'Java', 'Neo4J'],
    livePreview: 'https://www.sodiuswillert.com/en/products/secollab',
  },
  {
    name: 'En cours',
    description:
      'Création d\'une application permettant de promouvoir la participation aux activités culturelles telles que les musées, les expositions et les conférences à travers un système ludique de quêtes',
    stack: ['React-native', 'React', 'NestJs', 'Supabase'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React-Native',
  'Angular',
  'Redux',
  'Firebase',
  'HTML',
  'CSS',
  'React',
  'JavaScript',
  'TypeScript',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fauconnier.gaetan@gmail.com',
}

export { header, about, projects, skills, contact }
