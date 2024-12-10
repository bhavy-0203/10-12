import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/counterSlice";
import Addproduct from "./Addproduct";
import ProductList from "./ProductList";

const App = () => {
  const dispatch = useDispatch();

  const addCounter = () => {
    dispatch(add(10));
  };

  const removeCounter = () => {
    dispatch(remove());
  };
  let { count } = useSelector((store) => store.counter);

  return (
    <div>
      <Addproduct />
      <ProductList />
    </div>
  );
};

export default App;
