import React, {useState} from "react";

const App5 = () => {
    const [person, setPerson] = useState({name: "", age: ""});
    const {name, age} = person;
    const onChange = e => {
        const {name, value} = e.target;
        setPerson(prevState => ({...prevState, [name]: value}))
    }
    return (
        <div>
            name: {name}, age: {age}
            <br/>
            <input type="text" placeholder="name" name="name"
                   onChange={onChange}/>
            <input type="text" placeholder="age" name="age"
                   onChange={onChange}/>
        </div>
    )
}

export default App5;