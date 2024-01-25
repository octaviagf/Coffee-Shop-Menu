import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const dataSet = [
  {
    mainName: "Coffee Shop",
    openingHour: "7",
    closingHour: "6",
    location: "Av. Independencia 955",
  },
  { name: "Americano", price: "5" },
  { name: "Cappuccino", price: "7" },
  { name: "Chai Latte", price: "10" },
  { name: "Cortadito", price: "5" },
  { name: "Espresso", price: "7" },
  { name: "Latte", price: "10" },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>{dataSet[0].mainName}</h1>
    </div>
  );
}

function Menu() {
  const slicedData = dataSet.slice(1);

  return (
    <div className="container">
      <ul>
        <h2>Our Menu</h2>

        {slicedData.map((coffee) => (
          <li>{`☕ ${coffee.name} $${coffee.price}`}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const openingHour = dataSet[0].openingHour;
  const closingHour = dataSet[0].closingHour;

  return (
    <div className="footer">
      <p>
        🕖 We're open from {openingHour}AM to {closingHour}PM
      </p>
      <p className="block">📍 {dataSet[0].location}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
