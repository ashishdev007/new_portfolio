import React from 'react';

import Home from './views/Home';
import About from './views/About';
import Skills from './views/Skills';
import Projects from './views/Projects';

const routes = [
  { path: '/', exact: true, component: Home, name: 'Home' },
  { path: '/about', exact: true, component: About, name: 'About' },
  { path: '/skills', exact: true, component: Skills, name: 'Skills' },
  { path: '/projects', exact: true, component: Projects, name: 'Projects' },
];

export default routes;
