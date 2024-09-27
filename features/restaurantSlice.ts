import { createSelector, createSlice } from "@reduxjs/toolkit";

interface RestaurantState {
  restaurant: {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    gerne: string;
    address: string;
    description: string;
    long: number;
    latitute: number;
    dishes: {
      id: string;
      name: string;
      description: string;
      price: number;
      imgUrl: string;
    }[];
  };
}

const initialState: RestaurantState = {
  restaurant: {
    id: "",
    imgUrl: "",
    title: "",
    rating: 1,
    gerne: "",
    address: "",
    description: "",
    long: 0,
    latitute: 0,
    dishes: [],
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

// Selectors for the restaurant state in the store
export const selectRestaurant = (state: { restaurant: RestaurantState }) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;
