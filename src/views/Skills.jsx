import React from 'react';
import '../style/skills.css';
import bash from '../assets/skills/bash.svg';
import css from '../assets/skills/css.svg';
import docker from '../assets/skills/docker.svg';
import git from '../assets/skills/git.svg';
import github from '../assets/skills/github.svg';
import html from '../assets/skills/html.svg';
import java from '../assets/skills/java.svg';
import js from '../assets/skills/js.svg';
import linux from '../assets/skills/linux.svg';
import mongo from '../assets/skills/mongo.svg';
import node from '../assets/skills/node.svg';
import npm from '../assets/skills/npm.svg';
import perl from '../assets/skills/perl.svg';
import python from '../assets/skills/python.svg';
import react from '../assets/skills/react.svg';
import rest from '../assets/skills/rest.jpg';
import sql from '../assets/skills/sql.svg';

const Skills = () => {
  const images = () => {
    let svgs = [
      [python, 'python'],
      [java, 'java'],
      [html, 'html'],
      [css, 'css'],
      [js, 'js'],
      [react, 'react'],
      [node, 'nodeJs'],
      [mongo, 'MongoDB'],
      [sql, 'MY SQL'],
      [npm, 'npm'],
      [docker, 'docker'],
      [git, 'git'],
      [bash, 'Bash Terminal'],
      [github, 'github'],
      [linux, 'linux'],
      [perl, 'perl'],
      [rest, 'REST API'],
    ];

    return svgs.map((svg, i) => {
      return <img className="skill-svg" title={svg[1]} src={svg[0]} alt="" />;
    });
  };
  return (
    <div className="fill-parent background-shade">
      <div className="content-shade ">
        <div className="bold r-condensed h1 title">SKILLS</div>
        <div className="skills-conatiner">{images()}</div>
      </div>
    </div>
  );
};

export default Skills;
