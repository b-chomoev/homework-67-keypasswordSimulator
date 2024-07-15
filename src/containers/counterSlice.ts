import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    getValue: (state,action: PayloadAction<string>) => {
      state.value = action.payload;
      alert(state.value);
    }
  }
});

export const counterReducer = counterSlice.reducer;

export const {
  getValue,
} = counterSlice.actions;