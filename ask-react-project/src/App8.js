import React, {createContext, useContext, useReducer} from "react";

//contextAPI + redux example
const CounterContext = createContext();

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

const reducer = (prevState, action) => {
    const {type, payload: value = 1} = action;
    if (type === INCREMENT) {
        return prevState + value;
    } else if (type === DECREMENT) {
        return prevState - value;
    }
    return prevState;
}

const actionIncrement = (value) => ({type: INCREMENT, payload: value});
const actionDecrement = (value) => ({type: DECREMENT, payload: value});

const App8 = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h1 onClick={() => dispatch(actionIncrement(10))}>App8 : {state}</h1>
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
            <button onClick={() => dispatch(actionDecrement(1))}>{count_value}</button>
        </div>
    )
}

export default App8;