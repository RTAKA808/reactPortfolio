import React from 'react';
import './index.css'
export default function Nav({ links }) {
  return (
    <nav className='nav'>
      <div className='header'>
        <img className='logo'src="./RT_Logo.svg" alt="logo" />
        <h1 id='name'>Reyn Takahashi</h1>
        </div>
        <div>
          <ul className="navbar">
            {links.map((link) => (
              <li  key={link.key}>{link}</li>
            ))}
          </ul>
        
      </div>
    </nav>
  );
}
