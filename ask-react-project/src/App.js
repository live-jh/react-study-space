import React, {useState} from "react"
import {Input} from "antd";
import Counter2 from "./component/Counter2";
import Counter from "./component/Counter";
import Profile from "./component/Profile";
import Message from "./component/Message";

function App() {
    const [value, setValue] = useState({title: "", content: ""});

    const onChange = e => {
        const {value, name} = e.target;
        setValue(prevState => ({...prevState, [name]: value})) //useState Hook은 이전 상태값을 항상 제거 (obj 통채로 변경하기에 prevState를 같이 선언해서 return 해줘야함)
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello world</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginBottom: '20px'}}
                >
                    Learn React
                </a>
                <div style={{marginBottom: '20px'}}>
                    <Counter initValue={10}/>
                    <Counter2 onClick={() => console.log("clicked")}/>
                    <Input placeHolder="title" name="title" onChange={onChange}/>
                    <Input placeHolder="content" name="content" onChange={onChange}/>
                </div>
                {JSON.stringify(value)}

                <Profile/>
                <Message/>
            </header>
        </div>
    );
}

export default App;
