module.exports = {
  email: 'arjun1237.kp@gmail.com',

  logo:
    'M 32.55 49.63 L 29.82 42.56 L 12.39 42.56 L 9.8 49.63 L 0 49.63 L 20.65 0 L 21.35 0 L 42.07 49.63 L 32.55 49.63 Z M 14.91 35.77 L 27.23 35.77 L 22.12 22.47 L 20.93 18.55 L 19.81 22.47 L 14.91 35.77 Z',

  logo_alphabet_g_position: 'translate(29.000000, 19.000000)',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/arjun1237',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/arjun1237_kp',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/arjun1237/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
