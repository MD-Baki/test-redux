import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    data: null,
};

const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, payload) => {
            state.value = state.value + 1;
        },
        decrement: (state, payload) => {
            state.value = state.value - 1;
        },
        setDataUpdate: (state, payload) => {
            state.data = payload;
        },
    },
});

export const { increment, decrement, setDataUpdate } = counter.actions;
export default counter.reducer;
