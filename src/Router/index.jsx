import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import NotFound from "../pages/404";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Navbar from "../pages/Navbar";
import Login from '../pages/Login'
// import Product from "../pages/Product";

// const routes = [
//   { name: 'Home Page', path: '/', component: HomePage },
//   { name: 'Not Found', path: '/not-found', component: NotFound },
//   { name: 'Products', path: '/products', component: Products },
//   { name: 'Carts', path: '/cart', component: Cart },
// ]

export const MainRoute = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [newData, setNewData] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://instant-eats-production.up.railway.app/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function fetchCartItems() {
    fetch("https://instant-eats-production.up.railway.app/carts")
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
        setCartItems(d);
      });
  }

  useEffect(() => {
    fetch("https://instant-eats-production.up.railway.app/foods")
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  }, [newData]);

  useEffect(() => {
    fetch("https://instant-eats-production.up.railway.app/users")
      .then((r) => r.json())
      .then((users) => {
        console.log(users);
        setUsers(users);
      });
  }, []);

  function newFetch() {
    setNewData((newData) => !newData);
  }
  const [food, setFood] = useState({});

  function addCart(foodId) {
    console.log(foodId);
    fetch(`https://instant-eats-production.up.railway.app/foods/${foodId}`)
      .then((r) => r.json())
      .then((food) => {
        console.log(food);
        setFood(food);
      });
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/not-found" element={<NotFound />} />
        <Route
          exact
          path="/products"
          element={
            <Products addCart={addCart} products={products} users={users} />
          }
        />
        <Route exact path="/login" element={<Login/>}/>
        {/* <Route exact path="/product" element={<Product product={product} users={users}/>} /> */}
        <Route
          exact
          path="/cart"
          element={
            <Cart
              newFetch={newFetch}
              user={user}
              food={food}
              users={users}
              products={cartItems}
              getUpdatedItems={fetchCartItems}
            />
          }
        />
      </Routes>
    </>
  );
};
