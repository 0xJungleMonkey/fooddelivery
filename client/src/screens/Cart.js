import React from "react";
import TopNav from "../components/TopNav";
import { Trash } from "react-bootstrap-icons";
import QuantitySelector from "../components/QuantitySelector";
import { useCart, useDispatchCart } from "../components/ContextReducer";
import { toast, Toaster } from "react-hot-toast";
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <>
        <div>
          <div className="m-5 w-100 text-center fs-3 ">The Cart is Empty!</div>
        </div>
      </>
    );
  }
  const handleIncrement = async (item) => {
    await dispatch({
      type: "INCREASE",
      id: item.id,
      price: item.price + item.price / item.qty,
      qty: item.qty + 1,
    });
    console.log("handleIncrement called" + item.id);
    return;
  };

  const handleDecrement = (item, index) => {
    console.log("meow" + item.qty);
    if (item.qty > 1) {
      dispatch({
        type: "DEDUCE",
        id: item.id,
        price: item.price - item.price / item.qty,
        qty: item.qty - 1,
      });
      console.log("I am done");
      return;
    } else {
      dispatch({ type: "REMOVE", index: index });
      return;
    }
  };
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index: index });
  };
  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    console.log(userEmail);
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch(
      "https://quickbite-htqe.onrender.com/user/placeorder",
      {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      }
    );
    console.log("JSON RESPONSE:::::", response.status);
    if (response.status === 200) {
      toast.success("Your order has been placed! Thank you!");
      setTimeout(() => {
        dispatch({ type: "DROP" });
      }, 1200);
      // toast.success("Your order has been placed! Thank you!");
    }
  };

  return (
    <>
      <div className="container mt-5 table-responsive table-responsive-sm table-responsive-md">
        {/* <div className="mt-5"> */}
        <h1 className="text-center">Shopping Cart</h1>
        <hr></hr>
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
                <td>
                  <QuantitySelector
                    quantity={food.qty}
                    onIncrement={() => handleIncrement(food)}
                    onDecrement={() => handleDecrement(food, index)}
                    onRemove={handleRemove}
                  />
                </td>
                <td>${food.price}</td>
                <td onClick={() => handleRemove(index)}>
                  <Trash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex flex-row justify-content-between m-2">
          <h3 className="fs-2 ms-5">Total Price: </h3>
          <h3 className="fs-2 me-5">${totalPrice}</h3>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn bg-success me-5 mt-3" onClick={handleCheckOut}>
            {" "}
            Check Out{" "}
          </button>
          <Toaster position="top-center" />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
