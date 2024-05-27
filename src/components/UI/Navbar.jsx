import React from 'react';
import styles from './index.css'
export default function Nav({ links }) {
  return (
    <nav className='nav'>
      <div>
        <h1>Reyn Takahashi</h1>
        <h2>Full-Stack Engineer</h2>
        <div>
          <ul className="navbar">
            {links.map((link) => (
              <li key={link.key}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
