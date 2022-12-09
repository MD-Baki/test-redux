const initialState = {
    value: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return console.log(state, action);
        default:
            return state;
    }
};
