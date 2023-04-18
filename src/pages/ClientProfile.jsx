import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="background-gradiant d-flex">
      <div className="box-account">
        <div className="right">
          <div className="title-part">
            <p>صفحتك الشخصية</p>
            {/* <p>مرحباً بك في نظام إدارة المحتوى الذكي</p> */}
          </div>
          <form className="account-auth">
            <img src="client-profile-image.png" alt="Client Profile" />
            <input placeholder="الاسم الرباعي كاملاً" required />
            <input placeholder="البريد الإلكتروني" required />
            <input placeholder="ادخل الرقم السري" required />
            <input placeholder="اعد ادخال الرقم السري" required />

            <label for="vehicle1"> اوافق على الشروط والأحكام </label>
            <br />
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="accept"
            />
            <button className="form-btn" type="submit">
              تسجيل حساب جديد
            </button>
            <Link to="/clientprofile">
              <button className="form-btn" type="submit">
                لدي حساب بالفعل
              </button>
            </Link>
          </form>
        </div>
        <div className="left">
          <img src="images/logo-account.svg" className="img" />
        </div>
      </div>
    </div>
    // <div className='background-gradiant d-flex'>
    //   <div className='box-account'>
    //     <div className='right'>
    //       <div className='title-part'>
    //         <div className="account-auth">
    //           <h1>Client Name</h1>
    //           <img src="client-profile-image.png" alt="Client Profile" />
    //           <p>Bio:</p>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere velit eu odio bibendum, et tristique nulla molestie. Ut ac quam euismod, iaculis dolor eget, viverra eros. Nam posuere ante quis eros dapibus malesuada. Morbi sit amet sem nunc. Integer sagittis risus vitae quam vestibulum consectetur.</p>
    //           <ul>
    //             <li>Location: City, Country</li>
    //             <li>Occupation: Occupation Name</li>
    //             <li>Interests: Interests Name</li>
    //             <li>Website: <a href="https://clientwebsite.com">https://clientwebsite.com</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Profile;
