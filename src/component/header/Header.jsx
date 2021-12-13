import React from "react";
import { ReactComponent as Logo } from "../asset/images/smart-space-logo.svg";
import "./style.css";

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <Logo />
          <ul className="header-font">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Content</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
