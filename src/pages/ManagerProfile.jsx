import React from 'react';
import { Link } from 'react-router-dom';

function ManagerProfile() {
  return (
    <div className='background-gradiant d-flex'>
    <div className='box-account'>
      <div className='right'>
        <div className="title-part">
          <p>صفحتك الشخصية</p>
          {/* <p>مرحباً بك في نظام إدارة المحتوى الذكي</p> */}
        </div>
        <form className="account-auth">
          <img src="client-profile-image.png" alt="Client Profile" />
          <input placeholder="الاسم الرباعي كاملاً" required/>
          <input placeholder="البريد الإلكتروني" required/>
          <input placeholder="ادخل الرقم السري" required/>
          <input placeholder="اعد ادخال الرقم السري"required/>

          <label for="vehicle1"> اوافق على الشروط والأحكام </label><br/>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="accept" /> 
          <button className='form-btn' type="submit">تسجيل حساب جديد</button>
          <Link to='/clientprofile'>
          <button className='form-btn' type="submit">لدي حساب بالفعل</button>
          </Link>
        </form>
      </div>
      <div className='left'>
        <img src="images/logo-account.svg" className="img" />
      </div>
    </div>
  </div>
  );
}

export default ManagerProfile;