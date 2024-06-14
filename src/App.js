import "./App.css";
import Product from "./Product";
import { useEffect, useState } from "react";

function App() {
  let [productVisible, setProductVisible] = useState(false);

  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        users = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome</h1>
      <button
        onClick={() => {
          setProductVisible(true);
        }}
      >
        Show Product
      </button>
      <button
        onClick={() => {
          setProductVisible(false);
        }}
      >
        Hide Product
      </button>
      {productVisible === true ? <Product /> : null}
      {/* <Product /> */}

      <div className="ui">
        {users.map((user, index) => {
          return (
            <div className="user" key={index}>
              <h1>{user.name}</h1>
              <h3>{user.username}</h3>
              <h4>{user.website}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
