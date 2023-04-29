import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useState } from "react";

const Navbar = () => {
  let role;
  let token;
  if (localStorage.getItem("accessToken")) {
    token = localStorage.getItem("accessToken");
    let tokenData = jwtDecode(token);
    role = tokenData.role;
  }
  // logout method
  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  var [show, setShow] = useState(false);
  
  const handleClick = () => {
    console.log('Button clicked');
    if (show) {
      setShow(false);
      return;
    }
    else
      setShow(true);
  }


  return (
    <>
      <header className="header header-v3"
      style={
        {
          display: "fixed",
          //marginBottom: "25%",
        }}
      >

        <div className="container">
          <nav id="navigation1" style={
            {
              justifyContent: "space-between",

            }
          } className="navigation display-flex">
            <div className="nav-header"> 
              <Link className="nav-brand" to="/">
                <img className="img-header" src="images/test.svg" alt="" />
              </Link>
              <div className="nav-toggle"></div>
            </div>

            <button className="dropDown"
            style={
              {
                backgroundColor: "transparent",
                alignSelf: "end",

              }
            
            }  onClick={() => handleClick()}><img src="images/menu.png" alt="Button Image" 
            style={
              {
                width: "50px",
                height: "50px",
            }
          }
            /></button>
            {show && (
            <div className="nav-menus-wrapper xs-menu">

              <ul className="nav-menu align-to-right" style={
                {
                  backgroundImage: "linear-gradient(83.2deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)",     
                  }           
              }>
                
                {role === "ROLE_MANAGER" && (
                  <>
                    <li className="active">
                      <Link to="/products">المنتجات</Link>
                    </li>
                    <li className="active">
                      <Link to="/addcourse">اضافة دورة</Link>
                    </li>
                    <li className="active">
                      <Link to="/addtask">اضافة مهمة</Link>
                    </li>
                    <li className="active">
                      <Link to="/tasks">المهمات</Link>
                    </li>
                    <li className="active">
                      <Link to="/donetasks"> المهمات المكتملة</Link>
                    </li>
                    <li className="active">
                      <Link to="/chatroom">دردشة</Link>
                    </li>

                  </>
                )}
                {role === "ROLE_CUSTOMER" && (
                  <>
                    <li className="active">
                      <Link to="/customerproducts">المنتجات</Link>
                    </li>
                    <li className="active">
                      <Link to="/addproduct">اضافة منتج</Link>
                    </li>
                    <li className="active">
                    <Link to="/opinions">المقترحات</Link>
                    </li>
                    <li className="active">
                      <Link to="/contact">تواصل معنا</Link>
                    </li>
                    <li className="active">
                      <Link to="/about">من نحن؟</Link>
                    </li>
                    <li className="active">
                      <Link to="/chatroom">دردشة</Link>
                    </li>
                  </>
                )}
                {role === "ROLE_EMPLOYEE" && (
                  <>
                    <li className="active">
                      <Link to="/overload">المهام الاضافية</Link>
                    </li>
                    <li className="active">
                      <Link to="/courses">الدورات</Link>
                    </li>
                   
                    <li className="active">
                      <Link to="/employeetasks">مهامي</Link>
                    </li>
                    <li className="active">
                      <Link to="/chatroom">دردشة</Link>
                    </li>
                  </>
                )}
                {role === "ROLE_ADMIN" && (
                  <>
                  <li className="active">
                      <Link to="/allusers">الموظفين و المديرين</Link>
                    </li>
                    <li className="active">
                      <Link to="/tasks">المهام</Link>
                    </li>
                    <li className="active">
                      <Link to="/adminproducts">المنتجات</Link>
                    </li>
                    <li className="active">
                      <Link to="/admincourses">الدورات</Link>
                    </li>
                  </>
                )}
                <li className="active">
                  <Link to="/">الرئيسية</Link>
                </li>
                {token ? (
                  <>
                    <li className="nav-item dropdown"

                    >
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        تسجيل الخروج و تعديل البيانات
                      </a>
                      <ul class="dropdown-menu">
                        <li>
                          <a onClick={logout} class="dropdown-item" href="#">
                            تسجيل الخروج
                          </a>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/profile">
                            تعديل البيانات
                          </Link>
                          <Link class="dropdown-item" to="/Userprofile">
                            ملفي الشخصي
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <li className="active">
                    <Link to="/login">تسجيل دخول</Link>
                  </li>
                )}
              </ul>
            </div>)}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
