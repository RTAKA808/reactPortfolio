import React from "react";
import './index.css';

export default function PortfolioPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className='grid-container'>
        <div className="projects">
          <a href='https://github.com/Odesii/dataRebels' target='_blank' rel='noopener noreferrer'>
            <span id='titles'>Turn-based Game</span>
            <img src="public/datarebelsSS.JPG" alt="Turn-based Game Screenshot" />
          </a>
          <a id='deployed' href="https://datarebels.onrender.com/login" target='_blank' rel='noopener noreferrer'>Deployed Link</a>
        </div>

        <div className="projects">
          <a href="https://github.com/RTAKA808/theTextEditor" target='_blank'>
            <span id='titles'>Text Editor</span>
            <img src="public/texteditor.JPG" alt="Text Editor Screenshot" />
          </a>
          <a id='deployed' href="https://thetexteditor-q55t.onrender.com/" target='_blank'>Deployed Link</a>
        </div>

        <div className="projects">
          <a href="https://github.com/RTAKA808/postgressexpress" target='_blank' >
            <span id='titles'>PostgresSql</span>
            <img src="public/postgressexpressscreenshot.JPG" alt="PostgresSql Screenshot" />
          </a>
        </div>

        <div className="projects">
          <a href="https://github.com/RTAKA808/ORMsqlize" target='_blank' >
            <span id='titles'>Using Sequelize</span>
            <img src="public/ormss.JPG" alt="Sequelize Screenshot" />
          </a>
        </div>

        <div className="projects">
          <a href="https://github.com/RTAKA808/noSQLzone" target='_blank' >
            <span id='titles'>MongoDb and Mongoose</span>
            <img src="public/image.png" alt="MongoDb and Mongoose Screenshot" />
          </a>
        </div>

        <div className="projects">
          <a href="https://github.com/RTAKA808/blogbars" target='_blank'>
            <span id='titles'>Handlebars Blogsite with Authentication</span>
            <img src="public/blogbarsss.JPG" alt="Blogsite Screenshot" />
          </a>
          <a id='deployed' href="https://blogbars.onrender.com/" target='_blank' rel='noopener noreferrer'>Deployed Link</a>
        </div>
      </div>
    </section>
  );
}
