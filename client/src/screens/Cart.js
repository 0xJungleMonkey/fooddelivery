import React from "react";
import TopNav from "../components/TopNav";
import { Trash } from "react-bootstrap-icons";

import { useCart, useDispatchCart } from "../components/ContextReducer";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <>
        {/* <TopNav /> */}
        <div>
          <div className="m-5 w-100 text-center fs-3 ">The Cart is Empty!</div>
        </div>
      </>
    );
  }
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index: index });
  };
  let totalPrice = data.reduce(
    (total, food) => total + parseFloat(food.price.slice(1)),
    0
  );
  return (
    <>
      {/* <TopNav /> */}
      <div className="container mt-5 table-responsive table-responsive-sm table-responsive-md">
        <div className="mt-5">
          <table className="table table-hover ">
            <thead className=" text-success fs-4">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.price}</td>
                  <td onClick={() => handleRemove(index)}>
                    <Trash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h1 className="fs-2">Total Price: ${totalPrice}</h1>
          </div>
          <div>
            <button className="btn bg-success mt-5 "> Check Out </button>
          </div>
        </div>
      </div>
    </>
  );
}

// const handleCheckOut = async () => {
//   let userEmail = localStorage.getItem("userEmail");
//   // console.log(data,localStorage.getItem("userEmail"),new Date())
//   let response = await fetch("http://localhost:5000/api/auth/orderData", {
//     // credentials: 'include',
//     // Origin:"http://localhost:3000/login",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       order_data: data,
//       email: userEmail,
//       order_date: new Date().toDateString(),
//     }),
//   });
//   console.log("JSON RESPONSE:::::", response.status);
//   if (response.status === 200) {
//     dispatch({ type: "DROP" });
//   }
// };
