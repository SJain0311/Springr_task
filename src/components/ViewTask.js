import React from "react";
import { useLocation } from "react-router-dom";

function ViewTask({ data }) {
  // console.log(data.taskname)
  const location = useLocation();
  const formData = location.state.formValues;

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
          <tbody>
            
          </tbody>
        </thead>
      </table>
    </div>
  );
}

export default ViewTask;
