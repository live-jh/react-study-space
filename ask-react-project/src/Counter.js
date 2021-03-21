import React, {Component, useState} from "react";
import 'App.css';

// 함수형
// function Counter(props) {
//     const [num, setNum] = useState({value: props.initValue});
//     const {value} = num;
//
//     return (
//         <div>
//             <button onClick={() => {
//                 setNum({...num, value: value + 1})
//             }}>
//                 1씩 더하기
//             </button>
//             <button onClick={() => {
//                 if (value === 0) alert("0 이하로는 못내려요!")
//                 else setNum({...num, value: value - 1})
//             }}>
//                 1씩 빼기
//             </button>
//             <div style={{marginTop: "10px"}}>
//                 <span>현재 숫자 : {value}</span>
//             </div>
//         </div>
//     );
// }


 const actions = {
    init(initValue) {
        return {value: initValue}
    },
    increment(prevState) {
        return {value: prevState.value + 1}
    },
    decrement(prevState) {
        return {value: prevState.value - 1}
    }
}

//클래스형
class Counter extends Component {
    state = actions.init(this.props.initValue);

    onClick = (e) => {
        // if(e.target.name==='plus') this.setState({value: this.state.value + 1})
        // else this.setState({value: this.state.value - 1}) // 클래스형 컴포넌트의 유일한 상태값 settier

        this.setState(prevState => ({value: prevState.value + 1}))
        this.setState(prevState => ({value: prevState.value + 1}))
        this.setState(
            prevState => (console.log(prevState.value))
        )
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                <button name="plus" onClick={() => this.setState(actions.increment)}>
                    1씩 더하기
                </button>
                <button name="minus" onClick={() => this.setState(actions.decrement)}>
                    1씩 빼기
                </button>
                <div style={{marginTop: "10px"}}>
                    <span>현재 숫자 : {value}</span>
                </div>
            </div>
        )
    }
}


export default Counter;
