import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const About = React.lazy(() => import('./views/About'));
const Skills = React.lazy(() => import('./views/Skills'));

const routes = [
  { path: '/', exact: true, component: Home, name: 'Home' },
  { path: '/about', exact: true, component: About, name: 'About' },
  { path: '/skills', exact: true, component: Skills, name: 'Skills' },
];

export default routes;
