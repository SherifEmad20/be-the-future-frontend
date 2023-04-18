import { api } from "./axios";
import React, { useState, useEffect } from "react";
function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/task/getAllTasks").then((res) => {
      setTasks(res.data);
    });
  });
  //   function updateState(ID) {
  //     api.put(`/product/acceptProduct/${ID}`).then((res) => {
  //       setProducts(res.data);
  //     });
  //     products.map((product) => {
  //       if (product.id === ID) {
  //         product.state = "InProgress";
  //       }
  //     });
  //     window.alert("تم قبول المنتج");
  //   }

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
                </tr>
              </thead>
              <tbody>
                {Array.isArray(tasks) &&
                  tasks.map(
                    (tasks) =>
                      tasks.state !== "InProgress" && (
                        <tr key={tasks.id}>
                          <td>{tasks.taskName}</td>
                          <td>{tasks.taskDescription}</td>
                          <td>{tasks.taskStartDate}</td>
                          <td>{tasks.taskDeadline}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
