import React from "react";
import Footer from "../components/Footer.js";
import MenuItem from "../components/MenuItem.js";
import Bslide from "../components/Bslide.js";
import { useEffect, useState } from "react";
// import Slide from "../components/Slide.js";
import TopNav from "../components/TopNav.js";
const Home = () => {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch(
      "https://fooddelivery-two.vercel.app/menu/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    setFoodCategory(response[1]);
    setFoodItem(response[0]);
    console.log(response[0], response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      {/* <TopNav /> */}
      <Bslide />
      <div className="container">
        {foodCategory.length !== 0 ? (
          foodCategory.map((data) => {
            return (
              <div>
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem.length !== 0 ? (
                  <MenuItem
                    array={foodItem.filter(
                      (item) => item.CategoryName === data.CategoryName
                    )}
                  />
                ) : (
                  <div> No Such Data Found </div>
                )}{" "}
              </div>
            );
          })
        ) : (
          <div>still loading</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
