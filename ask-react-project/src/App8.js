import React, {createContext, useContext, useReducer} from "react";

const CounterContext = createContext();

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

const reducer = (prevState, action) => {
    const {type} = action;
    if (type === INCREMENT) {
        return prevState + 1;
    } else if (type === DECREMENT) {
        return prevState - 1;
    }
    return prevState;
}

const actionIncrement = () => ({type: INCREMENT});
const actionDecrement = () => ({type: DECREMENT});

const App8 = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1 onClick={() => dispatch(actionIncrement)}>App8 : {state}</h1>
            <CounterContext.Provider value={{state, dispatch}}>
                <GameBox/>
            </CounterContext.Provider>
        </div>
    )
}

const GameBox = () => {
    const {state: count_value, dispatch} = useContext(CounterContext);
    return (
        <div>
            <h3>Game Box</h3>
            <button onClick={() => dispatch(actionDecrement)}>{count_value}</button>
        </div>
    )
}

export default App8;