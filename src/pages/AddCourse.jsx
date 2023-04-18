import React, { useState } from "react";
import { api } from "./axios";
function AddCourse() {
  const [courseName, setCourseName] = useState("");
  const [courseID, setCourseID] = useState("");
  const [photo, setphoto] = useState("");

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };
  const handleCourseIDChange = (e) => {
    setCourseID(e.target.value);
  };

  async function addCourse(e) {
    e.preventDefault();
    await api.post("/course/addCourse", {
      courseName: courseName,
      courseId: courseID,
    });
    window.alert("تم اضافة التدريب");
  }
  return (
    <>
      <div className="background-gradiant d-flex">
        <div className="box-account">
          <div className="right">
            <div className="title-part">
              <h2>أهلاً ومرحباً</h2>
              <p>إضافة تدريب</p>
            </div>
            <br />
            <form className="account-auth">
              <input
                onChange={handleCourseNameChange}
                type="text"
                placeholder="اسم التدريب"
              />
              <input
                onChange={handleCourseIDChange}
                type="text"
                placeholder="الرقم التعريفي للتدريب"
              />
              <label htmlFor="imageInput">اختر صورة</label>
              <input type="file" required id="imageInput" accept="image/*" />
              <br />
              <button className="form-btn" type="submit" onClick={addCourse}>
                إضافة التدريب
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
