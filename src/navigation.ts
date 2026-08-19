import { getPermalink, getAsset } from './utils/permalinks';

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
          href: getPermalink('/management-und-prozesskompetenz'),
        },
        {
          text: 'Führungssupport und Coaching',
          href: getPermalink('/fuerungssupport-und-coaching'),
        },
        {
          text: 'Expertentätigkeit',
          href: getPermalink('/expertentätigkeit'),
        },
      ],
    },
    {
      text: 'Über mich',
      href: getPermalink('/#ueber-mich'),
    },
  ],
  actions: [{ text: 'Kontakt', href: getPermalink('/impressum-kontakt') }],
};

export const footerData = {
  links: [
    { text: 'Impressum', href: getPermalink('/impressum-kontakt') },
    { text: 'Disclaimer & Copyright', href: getPermalink('/disclaimer-copyright') },
    { text: 'Datenschutz', href: getPermalink('/datenschutz') },
  ],
  socialLinks: [
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/rainer-z%C3%BCnd-39a745391/',
    },
  ],
  footNote: `
    &copy; <script>document.write(new Date().getFullYear())</script> Raido GMBH
  `,
};
