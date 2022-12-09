import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// redux react-redux @reduxjs/toolkit
// create store
// create slices
// useDispatch => fire reducers
// useSelector => read state
