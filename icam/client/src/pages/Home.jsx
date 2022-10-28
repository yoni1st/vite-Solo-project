import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/NavbarAdmin";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function renderItem() {
    return items.map((item, i) => {
      return (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      );
    });
  }
  return (
    <>
      <Navbar />
      {renderItem()}
    </>
  );
}
