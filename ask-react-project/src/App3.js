import {useEffect, useState} from "react";

function App3() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [value, setValue] = useState({val1: 0, val2: 0});

    //기본형
    useEffect(() => {
    }) //render시 호출 (잘 사용하지 않음)
    useEffect(() => {
        console.log("mount")
    }, []) //mount할때만 호출
    useEffect(() => {
        console.log("changed value ->", value)
    }, [value]) // value가 변경될때 호출

    const onClick = e => {
        /* 클릭하는 순간 value 객체는 val2는 사라짐 */
        setValue(prevState => ({...prevState, val1: value.val1 + 2}));
    }

    return (
        <div>
            Hello World
            <hr/>
            {val1}
            <br/>
            {value.val1}
            <br/>
            {JSON.stringify(value)}
            <br/>
            <button onClick={onClick}>button</button>
        </div>
    )
}

export default App3;