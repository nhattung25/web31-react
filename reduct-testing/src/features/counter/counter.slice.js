import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      // Cập nhật trạng thái:
      // 1. Thay đổi trực tiếp

      state.value++;
      // 2. Trả về giá trị mới
    },
    decrement(state, action) {
      state.value--;
    },
  },
});


export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
