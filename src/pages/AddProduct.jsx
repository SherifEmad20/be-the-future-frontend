import { useState } from "react";
import { api } from "./axios";
import jwtDecode from "jwt-decode";
function AddProduct() {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState("");
  let token = localStorage.getItem("accessToken");
  let decoded = jwtDecode(token);
  const ID = decoded.sub;

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/product/add_productByCustomerName/${ID}`, {
        productName: product,
        description: description,
        price: price,
        deadline: deadline,
      });
      window.alert("تم ارسال مشروعك بنجاح");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="background-gradiant d-flex">
      <div className="box-account">
        <div className="right">
          <div className="title-part">
            <h2>قدم مشروعك</h2>
            {/* <p>عندنا دائما ستجد ماتريد</p> */}
          </div>
          <form className="account-auth" onSubmit={handleSubmit}>
            <input
              onChange={handleProductChange}
              type="text"
              placeholder="اسم المشروع"
              required
            />
            <input
              onChange={handleDescriptionChange}
              type="text"
              placeholder="تفاصيل المشروع"
              required
            />
            <input
              onChange={handlePriceChange}
              type="text"
              placeholder="السعر"
              required
            />
            <input
              type="text"
              onChange={handleDeadlineChange}
              placeholder="الميعاد النهائي للاستلام"
              required
            />

            <div className="row">
              <div className="col-md-6">
                <label for="vehicle1"> اوافق على الشروط والأحكام </label>
              </div>
              <div className="col-md-6">
                <input
                  type="checkbox"
                  id="vehicle1"
                  className="form-check-input"
                  required
                />
              </div>
            </div>
            <button className="form-btn" type="submit">
              ارسال المشروع
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

export default AddProduct;
