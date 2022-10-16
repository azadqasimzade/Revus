import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  car: [],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    aboutCar: (state, action) => { 
      state.car = action.payload
    },
  },
});

export const { aboutCar } = carSlice.actions;
export default carSlice.reducer;
