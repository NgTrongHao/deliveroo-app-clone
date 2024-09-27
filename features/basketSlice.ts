import { createSelector, createSlice } from "@reduxjs/toolkit";

interface BasketState {
  items: {
    id: string;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
  }[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const item = state.items.findIndex((item) => item.id === action.payload);
      if (item >= 0) {
        state.items.splice(item, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as it's not in the basket!`
        );
        return;
      }
    },
    removeDishFromBasket: (state, action) => {
      const idToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, removeDishFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: BasketState) => state.items;

export const selectBasketItemWithId = createSelector(
  [(state: BasketState) => state.items, (_, id: string) => id],
  (items, id) => items.filter((item) => item.id === id)
);

export const selectBasketTotal = createSelector(
  [(state: BasketState) => state.items],
  (items) => items.reduce((total, item) => total + item.price, 0)
);

export default basketSlice.reducer;
