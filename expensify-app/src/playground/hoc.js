// Higher Order Component (hoc) - A component(HOC) that renders another component(Regular).

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//hoc
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view first!!!!</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//     <AdminInfo isAdmin={true} info="Some Details" />,
//     document.getElementById("app")
//   );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="Some Details" />,
  document.getElementById("app")
);
