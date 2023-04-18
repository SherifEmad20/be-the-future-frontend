import React from "react";

const SharedProfile = (props) => {
  return (
    <div>
      {/* Shared elements */}
      <h1>{props.name}</h1>
      <p>{props.email}</p>

      {/* Customized elements */}
      {props.userType === "client" && <p>Client-specific information</p>}
      {props.userType === "employee" && <p>Employee-specific information</p>}
      {props.userType === "admin" && <p>Admin-specific information</p>}
    </div>
  );
};

export default SharedProfile;
