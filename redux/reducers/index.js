const initialState = { number: 0 };

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'counter/add':
            return { ...state, number: state.number + 1 };
        case 'counter/subtract':
            return { ...state, number: state.number - 1 };
        default:
            return state;
    }
}
