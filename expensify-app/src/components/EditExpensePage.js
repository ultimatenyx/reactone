import React from "react";
const EditExpensePage = (props) => {
  return (
    <div>
      This is from my EditExpenseDashboardPage with id {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;
