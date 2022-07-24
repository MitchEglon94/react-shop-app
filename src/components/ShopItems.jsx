import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../features/shop/shopSlice";

function ShopItems() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.shop.items);
  console.log(items);
  return (
    <>
      <h2>Shop Items</h2>
      <div className="shop-items-container">
        {items.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.image} alt={item.title} width="150px" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>£{item.price}</p>
            <button onClick={() => dispatch(addToBasket(item.id))}>
              Add to basket
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShopItems;
