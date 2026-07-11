// Site settings, migrated from the Cosmic CMS "settings" singleton (slug: general).
export const site = {
  title: 'gCeico',
  heading: 'Senior Software Engineer',
  description: 'Personal blog, portfolio, and more...',
  url: 'https://gceico.me',
  author: {
    name: 'Gabriel',
    slug: 'gCeico',
    fullName: 'Gabriel Ceicoschi',
    email: 'gabriel@gceico.me',
    address: 'Tilburg, Netherlands',
    avatar: '/avatar-new.jpg',
    // Refreshed 2026, original Cosmic author_bio preserved in .autopilot evidence
    bioHtml:
      '<p>Started as a <strong>programmer</strong>, found the way of <strong>UI/UX</strong>, and now I build <strong>AI agents</strong>. I run <a href="https://aibl.to">Aibl.to</a>, hands-on AI workshops for teams, and I write about AI on <a href="https://www.linkedin.com/in/gceico/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Still learning new stuff, still brewing coffee. ☕️</p>',
  },
  social: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gceico/' },
    { name: 'Github', url: 'http://github.com/gceico' },
    { name: 'X', url: 'https://x.com/gceico' },
    { name: 'Indiepa.ge', url: 'https://indiepa.ge/gceico' },

  ],
} as const;
