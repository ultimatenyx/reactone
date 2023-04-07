import React from "react";
const PortfolioDetailPage = (props) => (
    <div>
    This is my Portfolio Detail component with the id of {props.match.params.id}.<br />
    </div>
);

export default PortfolioDetailPage;