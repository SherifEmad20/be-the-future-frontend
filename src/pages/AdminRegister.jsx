import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function AdminRegister() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [role, setRole] = useState("");

  const history = useHistory();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlehRolechange = (e) => {
    setRole(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };
  const handleLnameChange = (e) => {
    setLname(e.target.value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ai-era-backend.herokuapp.com/api/v1/auth/register", {
        username: userName,
        password: password,
        email: email,
        firstName: fname,
        lastName: lname,
        role:role,
      });
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="background-gradiant d-flex">
      <div className="box-account"
          style={
            {
              height:"80%",
              borderRadius:"20px",
              marginTop:"5%",
            }
          }
      >
        <div className="right">
          <div className="title-part">
            <h2>مرحبا في نظام Ai Era</h2>
            {/* <p>مرحباً بك في نظام إدارة المحتوى الذكي</p> */}
          </div>
          <form className="account-auth" onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleFnameChange}
              placeholder="الإسم الأول"
              required
            />
            <input
              type="text"
              onChange={handleLnameChange}
              placeholder="إسم العائلة"
              required
            />
            <input
              type="text"
              onChange={handleEmailChange}
              placeholder="البريد الإلكتروني"
              required
            />
            <input
              type="text"
              onChange={handleUserNameChange}
              placeholder="إسم المستخدم"
              required
            />
            <input
              type="password"
              onChange={handlePasswordChange}
              placeholder="الرقم السري"
              required
            />
            <input
              type="password"
              placeholder="أعد إدخال الرقم السري"
              required
            />
             <div>
              <label htmlFor="options"> إختار دورك:   </label>
              <br />
              <select id="options" value={role} onChange={handlehRolechange}>
              <option value="ROLE_CUSTOMER">عميل</option>
              <option value="ROLE_EMPLOYEE">موظف</option>
              <option value="ROLE_MANAGER">مدير</option>
              <option value="ROLE_ADMIN">ادمن</option>
              
              </select>
              <p>You selected: {role}</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label for="vehicle1"> أوافق على الشروط والأحكام </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  id="vehicle1"
                  className="form-check-input"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="form-btn" type="submit">
                  تسجيل حساب جديد
                </button>
              </div>
              <div className="col-md-6">
                <a className="form-btn-a" href="/login">
                  لدي حساب بالفعل
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="left">
          <img src="images/logo-account.svg" className="img" />
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;
