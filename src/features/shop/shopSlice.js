import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  basket: [],
  status: "idle",
};

export const getItems = createAsyncThunk("shop/getItems", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  return data;
});

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const id = action.payload;
      const itemForBasket = state.items.find((item) => item.id === id);
      const checkItemExistsInBasket = state.basket.find(
        (item) => item.id === id
      );
      if (!checkItemExistsInBasket) {
        state.basket.push({ quantity: 1, ...itemForBasket });
      }
    },
    removeFromBasket: (state, action) => {
      const id = action.payload;
      const itemToRemoveIdx = state.basket.findIndex((item) => item.id === id);
      if (state.basket.length > 0) {
        const newArr = state.basket.filter((item) => item.id !== id);
        state.basket = newArr;
      } else {
        state.basket = [];
      }
    },
    clearBasket: (state, action) => {
      state.basket = [];
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const shopItem = state.items.find((item) => item.id === id);
      const itemToIncrease = state.basket.find((item) => item.id === id);
      itemToIncrease.quantity += 1;
      itemToIncrease.price = shopItem.price * itemToIncrease.quantity;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const shopItem = state.items.find((item) => item.id === id);
      const itemToDecrease = state.basket.find((item) => item.id === id);
      itemToDecrease.quantity -= 1;
      itemToDecrease.price = itemToDecrease.price - shopItem.price;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      });
  },
});

export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
  increaseQuantity,
  decreaseQuantity,
} = shopSlice.actions;
export default shopSlice.reducer;
