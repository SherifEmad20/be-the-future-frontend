import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let { data } = await axios.post(
        "http://ai-era-backend.herokuapp.com/api/v1/auth/login",
        {
          username: userName,
          password: password,
        }
      );
      console.log(data.message);
      if (data.message === "success") {
        localStorage.setItem("accessToken", data.token);
        history.push("/");
        window.location.reload();
      } else {
        window.alert("username or password is incorrect");
      }
    } catch (error) {
      console.log(error);
      window.alert("username or password is incorrect");
    }
  }

  return (
    <div className="background-gradiant d-flex">
      <div className="box-account">
        <div className="right">
          <div className="title-part">
            <h2>أهلاً ومرحباً</h2>
            <p>مرحباً بك في نظام إدارة المحتوى الذكي</p>
          </div>

          <form className="account-auth" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="اسم المستخدم"
              onChange={handleUserNameChange}
            />
            <input
              type="password"
              placeholder="الرقم السري"
              onChange={handlePasswordChange}
            />
            <div className="row">
              <div className="col-md-6">
                <button className="form-btn" type="submit">
                  تسجيل الدخول
                </button>
              </div>
              <div className="col-md-6">
                <a className="form-btn-a" href="/register" type="submit">
                  إنشاء حساب جديد
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="left">
          <img src="images/logo-account.svg" alt="..." className="img" />
        </div>
      </div>
    </div>
  );
}

export default App;
