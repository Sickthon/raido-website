import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Dienstleistungen',
      links: [
        {
          text: 'Übersicht',
          href: getPermalink('/#features'),
        },
        {
          text: 'Management- & Prozesskompetenz',
          href: getPermalink('/services'),
        },
        {
          text: 'Führungssupport und Coaching',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Expertentätigkeit',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Über mich',
      href: getPermalink('/ueber-mich'),
    },
  ],
  actions: [{ text: 'Kontakt', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Impressum', href: getPermalink('/impressum') },
    { text: 'Copyright', href: getPermalink('/terms') },
    { text: 'Datenschutz', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/rainer-z%C3%BCnd-39a745391/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
