import { api } from "./axios";
import React, { useState, useEffect } from "react";
function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/product/getAllProducts").then((res) => {
      setProducts(res.data);
    });
  }, []);
  function deleteState(ID) {
    api.delete(`/product/deleteProduct/${ID}`).then((res) => {
      setProducts(res.data);
    });
    window.alert("تم المسح ");
  }
  console.log(products);

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
                  <th scope="col">الحالة</th>
                  <th scope="col">مسح</th>
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
                          <td>{product.state}</td>
                          <td>
                            <button
                              style={{ height: "50%" }}
                              className="btn btn-danger"
                              onClick={() => deleteState(product.id)}
                            >
                              مسح
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

export default AdminProducts;
