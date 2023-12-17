import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          price: action.price,
          img: action.img,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    case "DROP":
      let empArray = [];
      return empArray;
    // case "UPDATE":
    //   let arr = [...state];
    //   arr.find((food, index) => {
    //     if (food.id === action.id) {
    //       console.log(
    //         food.qty,
    //         parseInt(action.qty),
    //         action.price + food.price
    //       );
    //       arr[index] = {
    //         ...food,
    //         qty: parseInt(action.qty) + food.qty,
    //         price: action.price + food.price,
    //       };
    //     }
    //     console.log(arr);

    //     return arr;
    //   });
    //   return arr;
    case "UPDATE":
      console.log("I am updating");
      return state.map((food) =>
        food.id === action.id
          ? {
              ...food,
              qty: parseInt(action.qty) + food.qty,
              price: action.price + food.price,
            }
          : food
      );

    // case "UPDATE":
    //   return state.map((food) => {
    //     if (food.id === action.id) {
    //       return {
    //         ...food,
    //         qty: action.qty, // Set the quantity directly
    //         price: action.price + food.price,
    //       };
    //     }
    //     return food;
    //   });
    case "DEDUCE":
      console.log("I am updating");
      return state.map((food) =>
        food.id === action.id
          ? {
              ...food,
              qty: food.qty - parseInt(action.qty),
              price: action.price + food.price,
            }
          : food
      );
    default:
      console.log("Error in Reducer");
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  console.log(state);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
