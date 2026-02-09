import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [
    {
      id: 1,
      value: 5,
    },
    {
      id: 2,
      value: 10,
    },
  ],
  reducers: {
    increment: (state, action) => {
      const counterId = action.payload;
       let counter = state.find((counter) => counter.id === counterId);
      counter.value += 1;
    },
    decrement: (state, action) => {

      const counterId = action.payload;
      const counter = state.find((counter) => counter.id === counterId);
      if (counter.value > 0) {
        counter.value = counter.value - 1;
      }
      
    },
    // incrementByAmount: (state, action) => {
    //   state.value = state.value + action.payload;
    // },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
