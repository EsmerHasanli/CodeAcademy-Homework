import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  basket: [],
};

if (JSON.parse(localStorage.getItem("basket"))) {
  initialState.basket = JSON.parse(localStorage.getItem("basket"));
} else {
  localStorage.setItem("basket", JSON.stringify([]));
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add_to_basket: (state, action) => {
      state.basket.push(action.payload);
      let prevBasket = JSON.parse(localStorage.getItem("basket"))
      localStorage.setItem("basket", JSON.stringify([...prevBasket, action.payload]));
    },
    remove_from_basket: (state, action) => {
      let idx = state.basket.findIndex((x) => x.id === action.payload); 
      state.basket.splice(idx, 1);
      localStorage.setItem("basket", JSON.stringify([...state.basket])); 
    },
    clear_basket: (state, action) => {
      localStorage.removeItem("basket"); 
      state.basket = []; 
    },
  },
});

export const { add_to_basket, remove_from_basket, clear_basket } = basketSlice.actions;

export default basketSlice.reducer;

