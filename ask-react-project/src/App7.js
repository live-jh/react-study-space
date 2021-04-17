import React, {createContext, useContext, useState} from "react";

//ContextAPI example
const CounterContext = createContext();

const App7 = () => {
    const [value, setValue] = useState(0);
    const onIncrement = () => {
        setValue((prevValue) => prevValue + 1);
    }

    return (
        <div>
            <button onClick={onIncrement}>+1</button>
            App7 : {value}
            <CounterContext.Provider value={{value, onIncrement}}>
                <Level3/>
            </CounterContext.Provider>
            {/*<Level3 value={value} onIncrement={onIncrement}/>*/}
        </div>
    )
}
const Level3 = () => {
    const {value, onIncrement} = useContext(CounterContext) // Context value를 가져올때는 useContext 함수 이용
    return (
        <div>
            <button onClick={onIncrement}>+1</button>
            Level3: {value}
        </div>
    )
}

//속성값으로 받기 (props)
// const Level3 = ({value, onIncrement}) => (
//     <div>
//         <button onClick={onIncrement}>+1</button>
//         Level3: {value}
//     </div>
// )
export default App7;