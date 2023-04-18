import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
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

  return (
    <>
      <header className="header header-v3"
      style={
        {
          display: "fixed",
        }}
      >
        <div className="container">
          <nav id="navigation1" className="navigation display-flex">
            <div className="nav-header">
              <Link className="nav-brand" to="/">
                <img className="img-header" src="images/test.svg" alt="" />
              </Link>
              <div className="nav-toggle"></div>
            </div>

            <div className="nav-menus-wrapper xs-menu"
            >
              <ul className="nav-menu align-to-right"
                                        style={
                                          {
                                            display: "flex",
                                            flexDirection: "row",
                                            
                                          }
                                        }
              >
                
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
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
