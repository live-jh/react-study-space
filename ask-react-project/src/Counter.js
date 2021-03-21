import React, {useState} from "react";
import 'App.css';

function Counter(props) {
    const [num, setNum] = useState({value: props.initValue});
    const {value} = num;
    return (
        <div>
            <button onClick={() => {
                setNum({...num, value: value + 1})
            }}>
                1씩 더하기
            </button>
            <button onClick={() => {
                if (value === 0) alert("0 이하로는 못내려요!")
                else setNum({...num, value: value - 1})
            }}>
                1씩 빼기
            </button>
            <div style={{marginTop: "10px"}}>
                <span>현재 숫자 : {value}</span>
            </div>
        </div>
    );
}

export default Counter;
