import { api } from "./axios";
import React, { useState, useEffect } from "react";
function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/user/getAll").then((res) => {
      setUsers(res.data);
    });
  }, []);
  function deleteUser(username) {
    api.delete(`/user/delete/${username}`).then((res) => {
      setUsers(res.data);
    });
    window.alert("تم المسح بنجاح");
  }

  return (
    <div className="background-gradiant d-flex">
      <div className="products-box">
        <div className="row">
          <div className="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">الاسم</th>
                  <th scope="col">اسم المستخدم </th>
                  <th scope="col"> البريد الالكتروني </th>
                  <th scope="col"> رقم الهاتف </th>
                  <th scope="col"> نوع المستخدم </th>
                  <th scope="col"> الاجر الاضافي </th>
                  <th scope="col"> مسح المستخدم </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map((users) =>
                    users.role === "ROLE_CUSTOMER" ||
                    users.role === "ROLE_ADMIN" ? null : (
                      <tr>
                        <td>{users.firstName}</td>
                        <td>{users.username}</td>
                        <td>{users.email}</td>
                        <td>{users.phoneNumber}</td>
                        <td>{users.role}</td>
                        <td>{users.salaryOverWork}</td>
                        <td>
                          <button
                            style={{ height: "50%" }}
                            className="btn btn-danger"
                            onClick={() => deleteUser(users.username)}
                          >
                            مسح
                          </button>
                        </td>
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

export default AllUsers;
