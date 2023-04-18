import { useEffect, useState } from "react";
import { api } from "./axios";
function AddTask() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [productName, setProductName] = useState("");
  const [product, setProducts] = useState([]);
  const [employees, setAllEmployees] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };
  useEffect(() => {
    api.get("/product/getAllProducts").then((res) => {
      setProducts(res.data);
    });
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/task/add_task/${productName}/${employeeName}`, {
        taskName: task,
        taskDescription: description,
        taskStartDate: startDate,
        taskDeadline: deadline,
      });
      window.alert("تم ارسال المهمة بنجاح");
    } catch (error) {
      console.log(error);
    }
  }
  const handleEmployeeNamechange = (e) => {
    setEmployeeName(e.target.value);
    console.log(employees);
  };
  const handleProductChange = (e) => {
    setProductName(e.target.value);
  };

  useEffect(() => {
    api.get(`/user/getAllEmployees`).then((res) => {
      setAllEmployees(res.data);
    });
  }, []);

  return (
    <div className="background-gradiant d-flex">
      <div className="box-account">
        <div className="right">
          <div className="title-part">
            <h2>قدم مشروعك</h2>
            {/* <p>عندنا دائما ستجد ماتريد</p> */}
            <br />
          </div>
          <form className="account-auth" onSubmit={handleSubmit}>
            <input
              onChange={handleTaskChange}
              type="text"
              placeholder="اسم المهمة"
              required
            />
            <input
              onChange={handleDescriptionChange}
              type="text"
              placeholder="تفاصيل المهمة"
              required
            />
            <input
              type="text"
              onChange={handleStartDateChange}
              placeholder="ميعاد الاستلام"
              required
            />
            <input
              type="text"
              onChange={handleDeadlineChange}
              placeholder="الميعاد النهائي للاستلام"
              required
            />
            <label htmlFor="options"> اختار المنتج: </label>
            <select
              id="options"
              value={productName}
              onChange={handleProductChange}
            >
              <option value="اختر منتج" defaultChecked>
                اختر منتج
              </option>
              {product.map((product) => (
                <option>{product.productName}</option>
              ))}
            </select>
            <br />
            <label htmlFor="options"> اختار موظف: </label>
            <select
              id="options"
              value={employeeName}
              onChange={handleEmployeeNamechange}
            >
              <option value="اختر موظف" defaultChecked>
                اختر موظف
              </option>
              {employees.map((employee) => (
                <option>{employee.username}</option>
              ))}
            </select>
            <br />
            <button className="form-btn" type="submit">
              ارسال المهمة
            </button>
            {/* <Link to='/login'>
            <button className='form-btn' type="submit">لدي حساب بالفعل</button>
            </Link> */}
          </form>
        </div>
        <div className="left">
          <img src="images/logo-account.svg" className="img" />
        </div>
      </div>
    </div>
  );
}

export default AddTask;
