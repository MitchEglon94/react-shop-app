import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketItems from "../components/BasketItems";
import { clearBasket } from "../features/shop/shopSlice";

function Basket() {
  const dispatch = useDispatch();
  const basketItems = useSelector((store) => store.shop.basket);
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    basketItems.forEach((item) => {
      total += item.price;
    });
    setBasketTotalPrice(total);
  }, [basketItems]);
  return (
    <div>
      <h2>Current Basket Items</h2>
      <button
        className="clear-basket-btn"
        onClick={() => dispatch(clearBasket())}
      >
        Clear Basket
      </button>
      {basketTotalPrice > 0 && (
        <p>Total price: £{basketTotalPrice.toFixed(2)}</p>
      )}
      <BasketItems />
    </div>
  );
}

export default Basket;
