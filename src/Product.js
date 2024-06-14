import React, { useEffect, useLayoutEffect, useState } from "react";

const Product = () => {
  let [name, setName] = useState("Ranjeet");

  let [age, setAge] = useState(20);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

    return function () {
      console.log("Dummy unmounted");
    };
  }, [age]);

  return (
    <div className="product">
      <h3>Sumsung M51</h3>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName("Anjali");
        }}
      >
        click me
      </button>
      <h2>{age}</h2>
      <button
        onClick={() => {
          setAge(26);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Product;
