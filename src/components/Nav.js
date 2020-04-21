import React from 'react';
import { useAppState } from '../hooks';

const Nav = () => {
  const { isMenuOpen, toggleMenu } = useAppState();
  if (!isMenuOpen) return null;
  return (
    <nav
      style={{
        background: 'var(--black)',
        color: 'white',
        position: 'fixed',
        left: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <h1>Hello</h1>
      <button onClick={toggleMenu}>Close</button>
    </nav>
  );
};

export default Nav;
