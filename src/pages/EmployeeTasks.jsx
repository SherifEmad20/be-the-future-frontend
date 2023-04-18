import { api } from "./axios";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
function EmployeeTasks() {
  const [Task, setTasks] = useState([]);
  let token = localStorage.getItem("accessToken");
  let tokenData = jwtDecode(token);
  let ID = tokenData.sub;
  useEffect(() => {
    api.get(`/task/getTaskByEmployeeName/${ID}`).then((res) => {
      setTasks(res.data);
    });
  }, []);

  function updateState(taskName) {
    const task = encodeURIComponent(taskName);
    api.put(`/task/doneTask/${task}`).then((res) => {
      setTasks(res.data);
    });
    window.alert("تمت المهمة");
  }

  function DropTask(taskName) {
    const task = encodeURIComponent(taskName);
    api.put(`/task/droppedTask/${task}`).then((res) => {
      setTasks(res.data);
    });
    window.alert("تم ارسالها للمهام الاضافية");
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
                  <th scope="col" style={{ textAlign: "center" }}>
                    حالة المهمة
                  </th>
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
                        <div className="row">
                          <div className="col-md-6">
                            <button
                              style={{ height: "100%" }}
                              className="btn btn-success"
                              onClick={() => updateState(task.taskName)}
                            >
                              تمت المهمة
                            </button>
                          </div>
                          <div className="col-md-6">
                            <button
                              style={{ height: "100%" }}
                              className="btn btn-danger"
                              onClick={() => DropTask(task.taskName)}
                            >
                              عدم اتمام المهمة
                            </button>
                          </div>
                        </div>
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
