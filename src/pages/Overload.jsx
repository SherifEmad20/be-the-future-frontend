import { api } from "./axios";
import jwtDecode from "jwt-decode";
import React, { useState, useEffect } from "react";
function EmployeeTasks() {
  const [Task, setTasks] = useState([]);
  useEffect(() => {
    api.get(`/task/getAllDroppedTasks`).then((res) => {
      setTasks(res.data);
    });
  }, []);

   const tokenData = localStorage.getItem("accessToken");
   const decode=jwtDecode(tokenData);
    const username = decode.sub;
    function updateState(taskId) {
      api.put(`/overWork/${username}/${taskId}`).then((res) => {
          setTasks(res.data);
          window.alert("تمت المهمة");
        });
    }
  return (
    <div className="background-gradiant d-flex">
      <div className="products-box">
        <div className="row">
          <div className="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">اسم المهمة</th>
                  <th scope="col">تفاصيل المهمة</th>
                  <th scope="col">ميعاد بدء المهمة </th>
                  <th scope="col">ميعاد تسليم المهمة</th>
                  <th scope="col">اسم المنتج الخاص بالمهمة</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(Task) &&
                  Task.map((task) => (
                    <tr>
                      <td>{task.taskName}</td>
                      <td>{task.taskDescription}</td>
                      <td>{task.taskStartDate}</td>
                      <td>{task.taskDeadline}</td>
                      <td>{task.product.productName}</td>
                      <td>
                            <button
                              style={{ height: "50%" }}
                              className="btn btn-success"
                              onClick={() => updateState(task.id)}
                            >
                              تمت المهمة
                            </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTasks;
