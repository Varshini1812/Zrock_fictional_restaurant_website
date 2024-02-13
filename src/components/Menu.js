import React, { useState } from "react";
import "../assets/css/menu.css";
import salad from "../assets/images/salad.jpg";
import soup from "../assets/images/soup.jpg";
import spring from "../assets/images/spring.jpg";
import pasta from "../assets/images/pasta.jpg";
import pizza from "../assets/images/pizza.jpg";
import burger from "../assets/images/burger.jpg";
import ice from "../assets/images/ice.jpg";
import fruit from "../assets/images/fruit.jpg";
import cake from "../assets/images/cake.jpg";

function Menu() {
  const menuData = [
    {
      id: 1,
      name: "Appetizers",
      items: [
        { id: 1, title: "Salad", price: 5.99, imageUrl: salad },
        { id: 2, title: "Soup", price: 4.99, imageUrl: soup },
        { id: 3, title: "Spring Rolls", price: 6.99, imageUrl: spring },
      ],
    },
    {
      id: 2,
      name: "Main Course",
      items: [
        { id: 4, title: "Pasta", price: 12.99, imageUrl: pasta },
        { id: 5, title: "Pizza", price: 14.99, imageUrl: pizza },
        { id: 6, title: "Burger", price: 10.99, imageUrl: burger },
      ],
    },
    {
      id: 3,
      name: "Desserts",
      items: [
        { id: 7, title: "Ice Cream", price: 4.99, imageUrl: ice },
        { id: 8, title: "Cake", price: 6.99, imageUrl: cake },
        { id: 9, title: "Fruit Salad", price: 3.99, imageUrl: fruit },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div id="menu" className="menu">
      <h1 className="reserve-title">
        <span>MENU</span> ITEMS
      </h1>
      {menuData.map((category) => (
        <div key={category.id}>
          <h2 onClick={() => toggleCategory(category.id)}>
            <span className="category-name">{category.name}</span>{" "}
          </h2>
          <ul
            style={{
              display: activeCategory === category.id ? "block" : "none",
            }}
          >
            {category.items.map((item) => (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <span className="item-title">{item.title}</span> -{" "}
                <span className="item-price">${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Menu;
