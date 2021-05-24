import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../style/navbar.css';

const NavBar = (props) => {
  const [showBar, setShowBar] = useState(false);
  const [first, setFirst] = useState(true);
  const [path, setPath] = useState();

  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  useEffect(() => {
    if (first) {
      setFirst(false);
    }
  }, [showBar]);

  return (
    <>
      <div
        className="hamburger"
        style={{ display: `${showBar ? 'none' : 'block'}` }}
        onClick={() => setShowBar(true)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        className="full-screen dimmer"
        style={{ display: `${!showBar ? 'none' : ''}` }}
        onClick={() => {
          setShowBar(false);
        }}
      ></div>

      <div
        className={`sidebar ${first ? 'n-hide' : showBar ? 'show' : 'hide'}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div style={{ backgroundColor: 'black' }}>
          <img
            src={`${window.location.origin}/logo.jpg`}
            style={{ width: '35%', marginLeft: '30%' }}
          />
        </div>
        <NavLink
          onClick={() => setShowBar(false)}
          exact
          activeClassName="active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setShowBar(false)}
          exact
          activeClassName="active"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setShowBar(false)}
          exact
          activeClassName="active"
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          onClick={() => setShowBar(false)}
          exact
          activeClassName="active"
          to="/projects"
        >
          Projects
        </NavLink>
        <a href={`/resume.pdf`}>Resume</a>
      </div>
    </>
  );
};

export default NavBar;
