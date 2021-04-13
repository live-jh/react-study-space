import React, {useState, useReducer} from "react";

//redux, dispatch
const SET_NAME = "SET_NAME";
const SET_AGE = "SET_AGE";


const reducer = (prevState, action) => {
    const {type, value} = action;
    if (type === SET_NAME) {
        return {...prevState, name: value}
    } else if(type === SET_AGE) {
        return {...prevState, age: value}
    }
    return prevState;
}

const App5 = () => {
    // const [person, setPerson] = useState({name: "", age: ""});
    // const {name, age} = person;
    // const onChange = e => {
    // const {name, value} = e.target;
    // setPerson(prevState => ({...prevState, [name]: value}))
    // }
    const [state, dispatch] = useReducer(reducer, {name: "", age: ""});


    const onChange = e => {
        const {name: type, value} = e.target;
        dispatch({type, value});
    }

    const {name, age} = state;
    return (
        <div>
            name: {name}, age: {age}
            <br/>
            <input type="text" placeholder="name" name="SET_NAME"
                   onChange={onChange}/>
            <input type="text" placeholder="age" name="SET_AGE"
                   onChange={onChange}/>
        <hr/>
            {JSON.stringify(state)}
        </div>

    )
}

export default App5;