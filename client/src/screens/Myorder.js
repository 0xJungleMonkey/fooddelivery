import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

export default function MyOrder() {
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5001/user/orders", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setorderData(response);
    });
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <TopNav />
      <div className="container" style={{ marginTop: "90px" }}>
        <h1>Order history</h1>
        {Array(orderData).map((data) => {
          return data.orderData
            ? data.orderData.order_data
                .slice(0)
                .reverse()
                .map((orderGroup, index) => {
                  return (
                    <div key={index} className="card mt-3">
                      {orderGroup.map((arrayData) => {
                        return arrayData.Order_date ? (
                          <>
                            <div className="card-header">
                              {arrayData.Order_date}
                            </div>
                          </>
                        ) : (
                          <div className="card-body d-flex flex-column flex-wrap">
                            <div className="d-flex flex-row flex-wrap m-2 justify-content-around align-items-center">
                              <img
                                src={arrayData.img}
                                alt={arrayData.name}
                                style={{ height: "50px", objectFit: "cover" }}
                              />

                              <h5>{arrayData.name}</h5>
                              <p>Quantity: {arrayData.qty}</p>
                              <p>Price: ${arrayData.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
            : "";
        })}
      </div>
    </div>
  );
}
