import React from 'react';
import '../style/about.css';

const About = () => {
  return (
    <div className="fill-parent background-shade">
      <div className="content-shade">
        <div className="bold r-condensed h1 title">About Me</div>
        <div className="question">
          <div className="topic">Who am I?</div>
          <div>
            I am an international student at University of Louisiana Monroe.
            Currently, I am a junior in Computer Science. I am originally from
            Nepal.
          </div>
        </div>
        <div className="question">
          <div className="topic">What do I like?</div>
          <div>
            I like to code and read books. On a cozy Saturday, you may find me
            listening Bob Dylan's lyrics or trying to solve a chess puzzle.
          </div>
        </div>
        <div className="question">
          <div className="topic">What am I looking for?</div>
          <div>
            I am looking for a job where I can dabble with interesting problems.
            I want to be part of a creative and inspiring team that pushes me to
            grow as a developer and as an individual.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
