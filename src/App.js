import React, { useEffect } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import OCMenu from "./components/OffCanvasMenu";
import { getItems } from "./features/shop/shopSlice";
import { useSelector, useDispatch } from "react-redux";
import { updateItems } from "./features/shop/shopSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <>
      <Header />
      <OCMenu />
      <Outlet />
    </>
  );
}

export default App;
