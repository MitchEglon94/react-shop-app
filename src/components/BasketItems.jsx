import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
} from "../features/shop/shopSlice";

function BasketItems() {
  const dispatch = useDispatch();
  const basketItems = useSelector((store) => store.shop.basket);
  return (
    <div className="basket-items-container">
      {basketItems.map((item) => (
        <div className="item-card basket-item" key={item.id}>
          <img src={item.image} alt={item.title} width="150px" />
          <h4 className="basket-item-title">{item.title}</h4>

          <div className="basket-item-price-remove">
            <p>£{item.price.toFixed(2)}</p>
            <div>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                ^
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => {
                  if (item.quantity === 1) {
                    dispatch(removeFromBasket(item.id));
                  }
                  dispatch(decreaseQuantity(item.id));
                }}
              >
                v
              </button>
            </div>

            <button
              className="remove-item-btn"
              onClick={() => dispatch(removeFromBasket(item.id))}
            >
              remove from basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BasketItems;
