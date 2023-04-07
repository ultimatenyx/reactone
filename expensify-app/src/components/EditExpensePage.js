import React from "react";
const EditExpensePage = (props) => (
    <div>This is my Edit Expense component with the id of {props.match.params.id}</div>
);

export default EditExpensePage;