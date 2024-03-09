import React from "react";

const PortfolioDetail = (props) => {
  return <div>This is portfolio with id: {props.match.params.id}</div>;
};
export default PortfolioDetail;
