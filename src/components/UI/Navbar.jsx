import React from 'react';
import styles from './index.css'
export default function Nav({ links }) {
  return (
    <nav className='nav'>
      <div>
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
