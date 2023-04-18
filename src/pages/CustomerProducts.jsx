import { api } from "./axios";
import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
function CustomerProducts() {
  const [products, setProducts] = useState([]);
  let token = localStorage.getItem("accessToken");
  let tokenData = jwtDecode(token);
  let ID = tokenData.sub;
  useEffect(() => {
    api.get(`/product/getProductBycustomerName/${ID}`).then((res) => {
      setProducts(res.data);
    });
    console.log(products);

  } , []);
  return (
    <div className="background-gradiant d-flex">
      <div className="products-box">
        <div className="row">
          <div className="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">اسم المنتج</th>
                  <th scope="col">تفاصيل المنتج</th>
                  <th scope="col">سعر المنتج</th>
                  <th scope="col">ميعاد الاستلام النهائي</th>
                  <th scope="col">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {products.map(
                  (product) =>
                     (
                      <tr>
                        <td>{product.productName}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.deadline}</td>
                        <td>{product.state}</td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProducts;
