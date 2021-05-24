import React from 'react';

import '../style/projects.css';

import colorGame from '../assets/projects/colorGame.png';
import shopping from '../assets/projects/shopping.png';
import yelpCamp from '../assets/projects/yelpCamp.jpg';
import finapp from '../assets/projects/finapp.png';
import code from '../assets/projects/code.png';
import link from '../assets/projects/link.svg';

const Projects = () => {
  const specs = {
    ReactJs: '#00b5ad',
    Express: '#2185d0',
    MongoDB: '#21ba45',
    Redux: '#00b5ad',
    MySQL: '#6435c9',
    NodeJs: '#b5cc18',
    EJS: '#767676',
    Heroku: '#a333c8',
    JavaScript: '#fbbd08',
    TypeScript: '#f2711c',
    Django: '#a5673f',
    HTML: '#e03997',
  };

  const project = {
    name: 'Yelpcamp',
    image: finapp,
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit Excepturi quas dolorem optio magni. Dolorem architecto expedita et cum eveniet atque earum? Nulla dolore debitis voluptatem aut earum quis accusantium aliquam.',
    specs: ['ReactJs', 'Express', 'NodeJs', 'MongoDB', 'Heroku'],
    link: '#',
  };

  const projects = [
    {
      name: 'Steganography',
      image: finapp,
      description:
        'A Python based app that hides text in images. Users can hide messages in pictures and escape the eyes of the Big Brother.',
      specs: ['Django', 'HTML', 'JavaScript'],
      link: '#',
    },
    {
      name: 'Financial Literacy App',
      image: finapp,
      description:
        'Simulates the “Dollars and Sense” game developed by United Way to identify and analyze the spending habits of students. This learning app will be offically launched by United Way and it will be used to teach financial literacy to 10000+ students.',
      specs: ['TypeScript', 'ReactJs', 'Express', 'NodeJs', 'MongoDB'],
      link: '#',
    },
    {
      name: 'Bug Control',
      image: colorGame,
      description:
        'A scrum based web app to help developers track the progress of developed. Foused on testing and bug fixes.',
      specs: ['TypeScript', 'ReactJs', 'Express', 'NodeJs', 'MongoDB'],
      link: '#',
    },
    {
      name: 'Yelpcamp',
      image: yelpCamp,
      description:
        'A custom blog focused on camping sites. Users can find campsites near them. They can also add new campsites and review existing campsites.',
      specs: ['EJS', 'Express', 'NodeJs', 'MongoDB', 'Heroku'],
      link: '#',
    },
    {
      name: 'Shopping List',
      image: shopping,
      description:
        "My first applcation in React and NodeJs. It's a simple webapp to add, edit and remove shopping list items.",
      specs: ['ReactJs', 'Express', 'NodeJs', 'MySQL', 'Heroku'],
      link: '#',
    },
  ];

  const getLabels = (project) => {
    return project.specs.map((spec, i) => {
      return (
        <div
          key={i}
          className="spec-label"
          style={{ backgroundColor: specs[spec] }}
        >
          {spec}
        </div>
      );
    });
  };

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <div className="segment project">
          <div className="project-image">
            <img src={project.image} alt="" />
          </div>

          <div className="description">
            <div className="h2 bold">{project.name}</div>
            <div>{project.description}</div>
            <div className="code" style={{ display: 'flex' }}>
              <img src={code} alt="" />
              {getLabels(project)}
            </div>
            <a
              href={project.link}
              style={{
                color: '#4aaee2',
                textDecoration: 'unset',
                fontStyle: 'italic',
              }}
            >
              <img src={link} alt="" /> Project Link
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="fill-parent background-shade">
      <div className="content-shade ">
        <div className="bold r-condensed h1 title">Projects</div>

        {renderProjects()}

        {/* <div className="test">
          <div className="project-image">
            <img src={project.image} alt="" />
          </div>

          <div className="description">
            <div className="h2 bold">{project.name}</div>
            <div>{project.description}</div>
            <div className="code">
              <img src={code} alt="" />
            </div>
            <a
              href={project.link}
              style={{
                color: '#4aaee2',
                textDecoration: 'unset',
                fontStyle: 'italic',
              }}
            >
              <img src={link} alt="" /> Project Link
            </a>
          </div>
        </div> */}

        <div style={{ position: 'relative' }}>
          <div style={{ height: '10vh' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
