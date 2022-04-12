import {
  DiReact,
  DiJavascript1,
  DiPostgresql,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiRedux, SiSequelize, SiExpress, SiNodedotjs } from "react-icons/si";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-text">
          This Single-Page Application was developed as an individual evaluation
          for the "Soy Henry" Bootcamp. It was created with the following
          technologies:
          <div className="tech-list">
            <li>
              <DiReact />
              React
            </li>
            <li>
              <SiRedux /> Redux
            </li>
            <li>
              {" "}
              <DiJavascript1 /> Javascript
            </li>
            <li>
              <SiSequelize />
              Sequelize
            </li>
            <li>
              <DiPostgresql />
              PostgreSQL
            </li>
            <li>
              <DiCss3 />
              Css
            </li>
            <li>
              <DiHtml5 />
              Html
            </li>
            <li>
              <SiExpress />
              Express
            </li>
            <li>
              <SiNodedotjs />
              Node.js
            </li>
          </div>
          For more information, please contact me with the following pages:
        </div>
      </div>
    </div>
  );
};
