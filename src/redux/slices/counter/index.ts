import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
<<<<<<< HEAD
    initialState: 0,
    name: 'counter',
    reducers: {
        increment: (state: number) => state + 1,
        decrement: (state: number) => state - 1,
    },

});
export const { decrement, increment } = counterSlice.actions;
export default counterSlice.reducer
=======
    initialState: { value: 1 }, // Corrected the property name to 'initialState'
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        incrementByValue: (state, { payload }) => {
            state.value = state.value + payload
        },
        decrement: (state) => {
            state.value = state.value - 1
        }
    }
});


export const { decrement, increment, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
