import { api } from "./axios";
import React, { useState, useEffect } from "react";
function DoneTasks() {
  const [Task, setTasks] = useState([]);
  useEffect(() => {
    api.get(`/task/getAllDoneTasks`).then((res) => {
      setTasks(res.data);
    });
  }, []);
  return (
    <div className="background-gradiant d-flex">
      <div className="products-box">
        <div className="row">
          <div className="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">اسم الموظف</th>
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
                      <td>{task.employeeName}</td>
                      <td>{task.taskName}</td>
                      <td>{task.taskDescription}</td>
                      <td>{task.taskStartDate}</td>
                      <td>{task.taskDeadline}</td>
                      <td>{task.product.productName}</td>
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

export default DoneTasks;
