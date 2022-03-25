import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/mgd1984',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/alecjmiller/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/gener8ive',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:alec@overviewanalytics.ca',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://instagram.com/gener8ive',
    label: 'Insta',
    icon: faInstagram,
  },
  {
    link: 'https://gener8ive.medium.com/',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://linktr.ee/gener8or',
    label: 'Linktree',
    icon: faBookmark,
  },
  {
    link: 'https://discord.com/invite/yaeayGHjpP',
    label: 'Discord',
    icon: faDiscord,
  },
];

export default data;
