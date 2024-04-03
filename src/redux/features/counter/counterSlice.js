import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase: (state, action) => state + 1,
    // if there is object in the initial state
    // we can changeit directly 
    // increase:(state,action)=>state.age++;
    decrease: (state, action) => state - 1,
    reset: (state) => 0
  },
});



export const {increase,decrease,reset} =counterSlice.actions;
export default counterSlice.reducer;