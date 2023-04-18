import { useEffect, useState } from "react";
import { api } from "./axios";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/course/getAllCourses");
      setCourses(res.data);
    };
    fetchData();
  }, []);
  

  return (
    <>
      <div className="background-gradiant d-flex">
        {/* <div className="row">
          <div className="col-md-12">
            <div className="title">
              <h2>تدريبات خاصة بالمؤسسة</h2>
            </div>
          </div>
        </div> */}
          <div className="products-box">
        <div className="row">
          <div className="col-md-12">
                <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">اسم الدورة</th>
                    <th scope="col">عدد المصوتين الموافقين</th>
                    <th scope="col">عدد المصوتين الغير الموافقين</th>
                    <th scope="col">اجمالي الاصوات</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(courses) &&
                    courses.map(
                      (course) =>
                (
                          <tr key={course.courseName}>
                            <td>{course.courseName}</td>
                            <td>{course.numberOfApproved}</td>
                            <td>{course.numberOfDisapproved}</td>
                            <td>{course.numberOfApproved+course.numberOfDisapproved}</td>

                          </tr>
                        )
                    )}
                </tbody>
              </table>
              
            </div>
            </div>
            </div>
          </div>
    </>
  );
}
