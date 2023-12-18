import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
    return (
        <div>
            <h2>This is a portfolio page.</h2>
            <Link to="/portfolio/1">Item 1</Link>
            <Link to="/portfolio/2">Item 2</Link>
        </div>
    )
}
export default PortfolioPage;