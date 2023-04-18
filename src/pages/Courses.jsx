import { useEffect, useState } from "react";
import { api } from "./axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/course/getAllCourses");
      setCourses(res.data);
    };
    fetchData();
  }, []);
  const handleVoteClick = async (courseId) => {
    const res = await api.put(`/course/voteToApproveCourse/${courseId}`);
    setCourses((prevState) =>
      prevState.map((course) =>
        course.id === res.data.id
          ? { ...course, numberOfApproved: res.data.numberOfApproved }
          : course
      )
    );
  };

  const handledisapproveVoteClick = async (courseId) => {
    const res = await api.put(`/course/voteToDisapproveCourse/${courseId}`);
    setCourses((prevState) =>
      prevState.map((course) =>
        course.id === res.data.id
          ? { ...course, numberOfDisapproved: res.data.numberOfDisapproved }
          : course
      )
    );
  };

  const handleApprovedVoteClick = async (courseId) => {
    const res = await api.put(`/course/approveCourse/${courseId}`);

    if(res.data === "Course approved"){
      window.alert("تمت الموافقة على الدورة");
    }
    else
      window.alert("لم يتم الموافقة على الدورة");
  };

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
        <div className="container">
          <div className="row">
            {courses.map((course) => {
              return (
                <div className="col-md-4" key={course.courseId}>
                  <div className="card">
                    <img src={course.photo} alt={course.courseName} />
                    <div className="">
                      <h4 className="title-h4">{course.courseName}</h4>
                    </div>
                    <button onClick={() => handleVoteClick(course.courseId)}>
                      Vote approve
                    </button>
                    <br/>
                    <button onClick={() => handledisapproveVoteClick(course.courseId)}>
                      Vote disapprove
                    </button>
                    <br/>
                    <button onClick={() => handleApprovedVoteClick(course.courseId)}>
                      Approve the course
                    </button>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
