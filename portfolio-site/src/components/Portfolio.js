import React from "react";
import { Link } from "react-router-dom";
const Portfolio = () => (
  <div>
    <h1> This is a Portfolio Page</h1>
    <ul>
      <li>
        <Link to="portfolio/1">Item One</Link>
      </li>
      <li>
        <Link to="portfolio/2">Item Two</Link>
      </li>
    </ul>
  </div>
);
export default Portfolio;
