import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coin: 0,
};

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
// export const {} = coinsSlice.actions;

export default coinsSlice.reducer;
