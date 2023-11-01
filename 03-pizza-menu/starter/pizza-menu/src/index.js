import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const x = "smonch";
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

/* ALT: const Header = function() {} OR const Header = () => {} 
{} in html enter JS mode and another nested {} creates an object
*/
function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}

// components always start w uppercase
// fn needs to return markup
function Pizza(props) {
  console.log(props);

  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div className="">
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  //return React.createElement("footer", null, "We're currently open!");

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /*
  if (hour >= openHour && hour <= closeHour) {
    alert("wer're currently open!"); // alert blocks JS so not ideal
  } else {
    alert("Sorry we're closed");
  }
  */

  // the power of adding javascript into HTML
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
}

// using the react dom lib where there is a createRoot method
// this is how we render the root so that we can render the app in the DOM
// v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
