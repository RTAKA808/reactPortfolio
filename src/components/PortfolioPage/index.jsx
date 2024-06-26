import React from "react";
import './index.css';
import { Tilt } from "react-tilt";


export default function PortfolioPage() {
  return (
    <section>
      <h1 className='title'>Projects</h1>
      <div className='grid-container'>
      <Tilt>
        <div className="projects">
          <a href='https://github.com/Odesii/dataRebels' target='_blank' rel='noopener noreferrer'>
            <span id='titles'>Turn-based Game</span>
            <img src="./datarebelsSS.JPG" alt="Turn-based Game Screenshot" />
          </a>
          <a id='deployed' href="https://datarebels.onrender.com/login" target='_blank' rel='noopener noreferrer'><img src='./live.png' alt='live button' className="live" /></a>
        </div>
      </Tilt>
      <Tilt>
        <div className="projects">
          <a href="https://github.com/RTAKA808/theTextEditor" target='_blank'>
            <span id='titles'>Text Editor</span>
            <img src="./texteditor.JPG" alt="Text Editor Screenshot" />
          </a>
          <a id='deployed' href="https://thetexteditor-q55t.onrender.com/" target='_blank'><img src='./live.png' alt='live button' className="live"  /></a>
        </div>
      </Tilt>
      <Tilt>
        <div className="projects">
          <a href="https://github.com/RTAKA808/blogbars" target='_blank'>
            <span id='titles'>Handlebars Blogsite with Authentication</span>
            <img src="./blogbarsss.JPG" alt="Blogsite Screenshot" />
          </a>
          <a id='deployed' href="https://blogbars.onrender.com/" target='_blank'><img src='./live.png' alt='live button' className="live"  /></a>
        </div>
      </Tilt>
      <Tilt>
        <div className="projects">
          <a href="https://github.com/RTAKA808/postgressexpress" target='_blank' >
            <span id='titles'>PostgresSql</span>
            <img src="./postgressexpressscreenshot.JPG" alt="PostgresSql Screenshot" />
          </a>
        </div>
      </Tilt>
      <Tilt>
        <div className="projects">
          <a href="https://github.com/RTAKA808/ORMsqlize" target='_blank' >
            <span id='titles'>Using Sequelize</span>
            <img src="./ormss.JPG" alt="Sequelize Screenshot" />
          </a>
        </div>
      </Tilt>
      <Tilt>
        <div className="projects">
          <a href="https://github.com/RTAKA808/noSQLzone" target='_blank' >
            <span id='titles'>MongoDb and Mongoose</span>
            <img src="./image.png" alt="MongoDb and Mongoose Screenshot" />
          </a>
        </div>
      </Tilt>
      </div>
    </section>
  );
}
