import React, { useState } from 'react';
import './index.css';
import Popup from '../../utils'

export default function InteractiveSkillsBubbles() {
  const skills = [
    { name: 'HTML', color: '#E34F26', description: 'A markup language for creating web pages.' },
    { name: 'CSS', color: '#1572B6', description: 'A stylesheet language for styling web pages.' },
    { name: 'JavaScript', color: '#F7DF1E', description: 'A programming language for web development.' },
    { name: 'React', color: '#61DAFB', description: 'A JavaScript library for building user interfaces.' },
    { name: 'Node.js', color: '#339933', description: 'A JavaScript runtime for server-side development.' },
    { name: 'Express', color: '#000000', description: 'A web application framework for Node.js.' },
    { name: 'PostgreSQL', color: '#336791', description: 'A powerful, open-source object-relational database system.' },
    { name: 'MongoDB', color: '#47A248', description: 'A document-based, NoSQL database.' },
    { name: 'Mongoose', color: '#A33', description: 'An ODM (Object Data Modeling) library for MongoDB and Node.js.' },
    { name: 'Sequelize', color: '#52B0E7', description: 'A promise-based Node.js ORM for SQL databases.' },
    // Add more skills as needed
  ];

  const [activeSkill, setActiveSkill] = useState(null);

  const handleBubbleClick = (skill) => {
    setActiveSkill(skill);
  };

  return (
    <>
    <h2><span className='arrow'>↓</span> Resume<span className='arrow'>↓</span> </h2>
    <div className="interactive-skills-bubbles">
      <div className="bubbles-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            
            className="bubble"
            style={{ backgroundColor: skill.color }}
            onClick={() => handleBubbleClick(skill)}
          >
            {skill.name}
          </div>
        ))}
      </div>
      {activeSkill && (
        <div className="skill-details">
          <h2>{activeSkill.name}</h2>
          <p>{activeSkill.description}</p>
          <button onClick={() => setActiveSkill(null)}>Close</button>
        </div>
      )}
      <div className="resume-download">
        <a href="./Reyn_Takahashi_WebDev_Resume.docx" download>
          <button>Download Resume</button>
        </a>
      </div>
    </div>
    </>
  );
}


