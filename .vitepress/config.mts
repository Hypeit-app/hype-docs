import { defineConfig } from 'vitepress'

const rawBase = process.env.DOCS_BASE ?? '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineConfig({
  base,
  title: 'Hype Help Center',
  description: 'Action-first guides for posting, collecting, earning, and growing on Hype.',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Posting', link: '/posting-on-hype' },
      { text: 'Collecting', link: '/owning-posts-collectors' },
      { text: 'Earning', link: '/earning-on-hype' }
    ],
    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'What is Hype?', link: '/what-is-hype' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Install Hype App', link: '/install-hype-app' }
        ]
      },
      {
        text: 'Post, Collect, Earn',
        items: [
          { text: 'Posting on Hype', link: '/posting-on-hype' },
          { text: 'Owning Posts (Collectors)', link: '/owning-posts-collectors' },
          { text: 'Earning on Hype', link: '/earning-on-hype' }
        ]
      },
      {
        text: 'Grow on Hype',
        items: [
          { text: 'Creator Playbook', link: '/creator-playbook' },
          { text: 'Examples of Moments That Work', link: '/examples-of-moments-that-work' },
          { text: 'Ambassador Program', link: '/ambassador-program' }
        ]
      },
      {
        text: 'Platform Basics',
        items: [
          { text: 'Supported Networks', link: '/supported-networks' },
          { text: 'Notifications', link: '/notifications' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ]
  }
})
