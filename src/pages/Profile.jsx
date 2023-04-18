import { api } from "./axios";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const Profile = () => {
  const [user, setUser] = useState({});
  let ID;
  try {
    const token = localStorage.getItem("accessToken");
    const tokenData = jwtDecode(token);
    ID = tokenData.sub;
    user.password = tokenData.Password;
    console.log(user.password);
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    api.get(`/user/get/${ID}`).then((res) => {
      setUser(res.data);
      //set the password to tocken password
    });
  },[]);

   function updateInfo() {
    console.log(user);
    //with request body User
    api.put(`/user/update`,
    {
      "username": user.username,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "email": user.email,
      "phoneNumber": user.phoneNumber,
      "address": user.address,
      "city": user.city,
    }
    ).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
     window.alert("تم التسليم");
   } 
  return (
    <>
      <div className="background-gradiant d-flex">
        <div className="box-account">
          <div className="right">
            <div className="title-part">
              <h2>أهلاً ومرحباً</h2>
              <p>مرحباً بك في نظام إدارة المحتوى الذكي</p>
            </div>
            <br />
            <form className="account-auth" >
              <input
                title="الاسم الاول"
                type="text"
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
   
                placeholder={user.firstName!==null?user.firstName:"الاسم الاول"}
                required
              />
              <input
                type="text"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                placeholder={user.lastName?user.lastName:"الاسم الاخير"}
                required
              />
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder={user.email ? user.email : "البريد الالكتروني"}
                required
                style={{
                  marginBottom :"5px",
                }}
              />
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder={user.username?user.username:"اسم المستخدم"}
                required
                disabled
              />
              <input
                type="text"
                value={user.phoneNumber}
                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                placeholder={user.phoneNumber?user.phoneNumber:"رقم الهاتف"}
                required
              />
              <input
                type="text"
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                placeholder={user.address?user.address:"العنوان"}
                required
              />
              <input
                type="text"
                value={user.city}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
                placeholder={user.city? user.city:"المدينة"}
                required
              />

              <div className="row">
                <div className="col-md-12">
                  <button className="form-btn" type="submit" onClick={updateInfo}>
                    تعديل البيانات
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="left">
            <img src="images/logo-account.svg" className="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
