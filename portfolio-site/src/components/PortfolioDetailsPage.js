import React from "react";
import { Link } from "react-router-dom";

const PortfolioDetailsPage = (props) => {
    return (
        <div>
        <h2>Details Page </h2>
        <p>This is item from {props.match.params.id}</p>
        <Link to="/">Go Home!</Link>
        </div>
    )
}

export default PortfolioDetailsPage;