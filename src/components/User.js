import { useState } from "react";
const User = ({ name }) => {
  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Name: {name}</h2>
      <h3>Location : Pune</h3>
      <h4>Contact: @saili21</h4>
    </div>
  );
};

export default User;
