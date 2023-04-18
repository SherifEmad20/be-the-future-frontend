import { api } from "./axios";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useState({});
    let ID;
    try {
        const Token = localStorage.getItem("accessToken");
        const tokenData = jwtDecode(Token);
        ID = tokenData.sub;
    } catch (error) {
        console.log(error);
    }

    useEffect(() => {
        api.get(`/user/get/${ID}`).then((res) => {
            setUser(res.data);
        });
    }, []);

    return (
        <>
         <div className="background-gradiant d-flex "
         >
        <div className="box-account"
            style=
                    {{

                        borderRadius:"20px",
                        fontSize:"10px",
                        height:"80%",
                        marginTop:"5%",
                    }}
            
        >
          <div className="right">
            <div className="title-part">
                <h2>ملفي الشخصي </h2>
            </div>
            <br />
            <form className="account-auth" >
                <label>الاسم الاول</label>
              <input
                title="الاسم الاول"
                type="text"
                value={user.firstName}
               
   
                placeholder={user.firstName!==null?user.firstName:"الاسم الاول"}
                required
              />
                <label>الاسم الاخير</label>
              <input
                type="text"
                value={user.lastName}
                
                placeholder={user.lastName?user.lastName:"الاسم الاخير"}
                required
              />
                <label>البريد الالكتروني</label>
              <input
                type="email"
                value={user.email}
                
                placeholder={user.email ? user.email : "البريد الالكتروني"}
                required
                style={{
                  marginBottom :"5px",
                }}
              />
                <label>اسم المستخدم</label>
              <input
                type="text"
                value={user.username}
               
                placeholder={user.username?user.username:"اسم المستخدم"}
                required
                disabled
              />
                <label>رقم الهاتف</label>
              <input
                type="text"
                value={user.phoneNumber}
                
                placeholder={user.phoneNumber?user.phoneNumber:"رقم الهاتف"}
                required
                disabled
              />
                <label>العنوان</label>
              <input
                type="text"
                value={user.address}
               
                placeholder={user.address?user.address:"العنوان"}
                required
                disabled
              />
                <label>المدينة</label>
              <input
                type="text"
                value={user.city}
                placeholder={user.city? user.city:"المدينة"}
                required
                disabled
              />

              <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary" type="submit">
                <Link class="dropdown-item" to="/profile">
                            للانتقال الي صفحة تعديل البيانات 
                </Link>
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
    )

}

export default UserProfile;