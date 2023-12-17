import React from "react";
import MenuItem from "../components/MenuItem.js";
import Bslide from "../components/Bslide.js";
import { useEffect, useState } from "react";
// import Slide from "../components/Slide.js";
import Row from "react-bootstrap/Row";
import TopNav from "../components/TopNav.js";
const Home = () => {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const loadData = async () => {
    let response = await fetch(
      "https://fooddelivery-backend-9dwj.onrender.com/menu/items",
      // "https://fooddelivery-two.vercel.app/menu/items",
      // "http://localhost:5001/menu/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    setFoodCategory(response[1]);
    setFoodItems(response[0]);
    console.log(response[0], response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <TopNav />
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
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                  {foodItems.length !== 0 ? (
                    foodItems
                      .filter((item) => item.CategoryName === data.CategoryName)
                      .map((filterItem) => {
                        return <MenuItem item={filterItem} />;
                      })
                  ) : (
                    <div> No Such Data Found </div>
                  )}{" "}
                </Row>
              </div>
            );
          })
        ) : (
          <div>Still loading </div>
        )}
      </div>
    </div>
  );
};

export default Home;
