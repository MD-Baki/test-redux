import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/actions/counterAction";

const Counter = () => {
    const [value, setValue] = useState(0);

    const handleIncrease = () => dispatch(increment(10));
    const handleDecrease = () => dispatch(decrement(10));

    const counterValue = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    console.log(counterValue);

    return (
        <div
            className="App"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                height: "100vh",
            }}
        >
            <button style={{ padding: "20px" }} onClick={handleDecrease}>
                -
            </button>
            <div>{value}</div>
            <button style={{ padding: "20px" }} onClick={handleIncrease}>
                +
            </button>
        </div>
    );
};

export default Counter;
