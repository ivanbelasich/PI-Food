import { NavLink } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-conteiner">
      <NavLink to="/about" className="navlink-footer">
        About
      </NavLink>
      <div className="navlink-footer">Contact</div>
      <a
        href="https://github.com/ivanbelasich/PI-Food"
        className="navlink-footer"
        target="_blank"
        rel="noreferrer"
      >
        Repo
      </a>
    </div>
  );
};
