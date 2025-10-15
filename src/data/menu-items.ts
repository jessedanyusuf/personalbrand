import { MenuItem } from '@/types';

export const menuItems: MenuItem[] = [
  {
    label: 'My Story',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Vision', href: '/vision' },
      { label: 'Journey', href: '/journey' }
    ]
  },
  {
    label: 'Business',
    items: [
      { label: 'Campfyre', href: '/campfyre' },
      { label: 'Fireworks', href: '/fireworks' },
      { label: 'Lantern', href: '/lantern' }
    ]
  },
  {
    label: 'Ministry',
    items: [
      { label: 'One City Church', href: '/one-city-church' },
      { label: 'One City Institute', href: '/one-city-institute' }
    ]
  },
  {
    label: 'Books',
    href: '/books'
  },
  {
    label: 'Podcasts',
    items: [
      { label: 'The Cave', href: '/podcasts/the-cave' },
      { label: 'Build with Jesse Dan-Yusuf', href: '/podcasts/build' },
      { label: 'The One City Abuja Podcast', href: '/podcasts/one-city' }
    ]
  },
  {
    label: 'Newsletters',
    items: [
      { label: 'The Cave', href: '/newsletters/the-cave' },
      { label: 'Campfyre', href: '/newsletters/campfyre' },
      { label: 'The Good News Letter', href: '/newsletters/good-news' }
    ]
  },
  {
    label: 'Shop',
    href: '/shop'
  }
];

