import React, { useState } from 'react';
import NavBar from './Navbar';
import TheContent from './TheContent';
import Picture from '../assets/ashish.jpg';

const TheLayout = () => {
  return (
    <div
      className="full-screen everything picture-background"
      style={{ backgroundImage: `url(${Picture})` }}
    >
      <NavBar />
      <TheContent />
    </div>
  );
};

export default TheLayout;
