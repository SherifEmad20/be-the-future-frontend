import { api } from "./axios";
import React, { useState, useEffect } from "react";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/product/getAllProducts").then((res) => {
      setProducts(res.data);
    });
  });
  function updateState(ID) {
    api.put(`/product/acceptProduct/${ID}`).then((res) => {
      setProducts(res.data);
    });
    products.map((product) => {
      if (product.id === ID) {
        product.state = "InProgress";
      }
    });
    window.alert("تم قبول المنتج");
  }

  return (
    <div className="background-gradiant d-flex">
      <div className="products-box">
        <div className="row">
          <div className="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">اسم العميل</th>
                  <th scope="col">اسم المنتج</th>
                  <th scope="col">تفاصيل المنتج</th>
                  <th scope="col">سعر المنتج</th>
                  <th scope="col">ميعاد الاستلام النهائي</th>
                  <th scope="col">تم التنفيذ</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(products) &&
                  products.map(
                    (product) =>
                      product.state !== "InProgress" && (
                        <tr key={product.id}>
                          <td>{product.customer.username}</td>
                          <td>{product.productName}</td>
                          <td>{product.description}</td>
                          <td>{product.price}</td>
                          <td>{product.deadline}</td>
                          <td>
                            <button
                              style={{ height: "50%" }}
                              className="btn btn-success"
                              onClick={() => updateState(product.id)}
                            >
                              قبول
                            </button>
                          </td>
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

export default Products;
