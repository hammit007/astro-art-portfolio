export const ROUTES = [
  {
    href: '/',
    label: 'Art',
  },
  {
    href: '/about',
    label: 'About',
  },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/EmaSuriano',
    icon: '/twitter.svg',
  }
] as const;
export const IMAGES = [
  {
    label: 'Mountain',
    href: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-yOiFHXMGUoYXY09D6zBAqFoWCQ-ksxImWra8Z7JjozJpO-FyUVj_GUhlik-yKosyhnEZJiXJRfwLQYJlER_RicZ99_=s1600',
    size: {
      width: 500,
      height: 400
    }
  },
  {
    label: 'House',
    href: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-wSyY7DTIdNzL5-zK9VLgvQCEJF44UacF1OB3Tc0KL0G3d6c3os_6_lB9Srtf5SuKa-k6wO5jg1zFAx1vgc02fDpbPGHw=s1600',
    size: {
      width: 500,
      height: 400
    }
  },
  {
    label: 'Twitter',
    href: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-xsHmEK7oIL2Bo0J4qoXJuWVztRswsbEfSlyK4PGo91WpzZgfGSV_isGOohRgXZCm8Fkt8-81hnt_RUKvfwzXMn83_D-A=s1600',
    size: {
      width: 500,
      height: 100
    }
  },
  {
    label: 'Twitter',
    href: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-yksZz2ppa-9SGvUeUmL9oeX9NinGaaOqWT4N6QdfPcdOsY8GNoN0A8EEMD_HKtX5lXyeSgMjGqsDhfwvqSSwgiu39n_A=s1600',
    size: {
      width: 500,
      height: 400
    }
  }
] as const;

export const PERSONAL_INFO = {
  name: 'Hammad Arshad',
  title: "Hammad Arshad's Art",
  subtitle: 'A collection of my best work in one place',
  role: 'Digital Artist',
  contact: 'mailto:hammit007@gmail.com',
  avatar: 'https://lh3.googleusercontent.com/drive-viewer/AITFw-zwZ700mPsH7CL5LQvuJeNx5GPrs2BDSOVXQQXYF5AFHvwRJrL_TZtOZb390RoSAWsAmteU_khQ_ZFGjSp0M9PZsDIEvQ=s1600',
  about:
    'During the day I am Lawyer, but at night I switched into my Artistic side. Most of my creations are made with Mid Journey (AI generation), and later on improved using Adobe Photoshop.',
} as const;

export const SEO_INFO = [
  {
    name: 'description',
    content: 'Art portfolio made by Ema Suriano in his free time',
  },
  { name: 'keywords', content: 'Art portfolio, Digital art, gallery' },
  { name: 'author', content: PERSONAL_INFO.name },
];
