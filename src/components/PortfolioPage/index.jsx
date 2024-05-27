import React from "react";
import styles from './index.css'

export default function PortfolioPage() {
    return (
<section>
  <h1>Projects</h1>
  <div className='grid-container'>
    <div className="projects">
    <a href= 'https://github.com/Odesii/dataRebels' target='_blank'> <span id='titles' >Turn-based Game</span> <img src="public\datarebelsSS.JPG" alt="" /><a id='deployed' href="https://datarebels.onrender.com/login" target='_blank'>Deployed Link</a></a>

    </div>
    <div className="projects">
       <a href="https://github.com/RTAKA808/theTextEditor"  target='_blank'> <span id='titles' >Text editor </span><img src="public\texteditor.JPG" alt="" /><a id='deployed' href="https://thetexteditor-q55t.onrender.com/" target='_blank'>Deployed Link</a></a>
    </div>
    <div className="projects">
      <a href="https://github.com/RTAKA808/postgressexpress" target='_blank'> <span id='titles' >PostgresSql</span><img src="public\postgressexpressscreenshot.JPG" alt="" /></a>
    </div>
    <div className="projects">
      <a href="https://github.com/RTAKA808/ORMsqlize" target='_blank'> <span id='titles' >Using Sequelize</span><img src="public\ormss.JPG" alt="" /></a>
    </div>
    <div className="projects">
    <a href="https://github.com/RTAKA808/noSQLzone" target='_blank'> <span id='titles' >MongoDb and Mongoose</span><img src="public\image.png" alt="" /></a>
    </div>
    <div className="projects">
    <a href="https://github.com/RTAKA808/blogbars" target='_blank'> <span id='titles' >Handlebars Blogsite with Authentification</span><img src="public\blogbarsss.JPG" alt="" /><a id='deployed' href="https://blogbars.onrender.com/" target='_blank'>Deployed Link</a></a>
    </div>
  </div>
</section>
    );
  }
  