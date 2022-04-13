import {
  DiReact,
  DiJavascript1,
  DiPostgresql,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedux,
  SiSequelize,
  SiExpress,
  SiNodedotjs,
  SiLinkedin,
  SiGithub,
  SiGmail,
} from "react-icons/si";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-text">
          This Single-Page Application was developed as an individual evaluation
          for the "Soy Henry" Bootcamp. It was created with the following
          technologies:
          <hr/>
          <div className="tech-list">
            <li>
              <DiReact className="react-icon" />
              React
            </li>
            <li>
              <SiRedux className="react-icon" /> Redux
            </li>
            <li>
              {" "}
              <DiJavascript1 className="react-icon" /> Javascript
            </li>
            <li>
              <SiSequelize className="react-icon" />
              Sequelize
            </li>
            <li>
              <DiPostgresql className="react-icon" />
              PostgreSQL
            </li>
            <li>
              <DiCss3 className="react-icon" />
              Css
            </li>
            <li>
              <DiHtml5 className="react-icon" />
              Html
            </li>
            <li>
              <SiExpress className="react-icon" />
              Express
            </li>
            <li>
              <SiNodedotjs className="react-icon" />
              Node.js
            </li>
          </div>
          <hr/>
          <div>
          For more information, contact me with through following pages:
          </div>
       
     
          <div className="about-pages">
            
            <li>
              <a
                href="https://www.linkedin.com/in/ivanbelasich/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin className="social-links-icons" color="#0A66C2" />
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ivanbelasich"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="social-links-icons" color="black" />
                Github
              </a>
            </li>
            <li>
              <a href="mailto:ivanbelasich@gmail.com">
                <SiGmail className="social-links-icons" color="#853535" />
                Gmail
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
