import React, {Component} from "react";
import {Button, Col, Input, List} from "antd";
import Immer_test from "./Immer_test";
import {produce} from "immer";

class TodoList extends Component {
    state = {
        todoList: [],
        cur_value: '',
        holder_text: '할일을 입력해주세요.',
    }

    onChange = e => {
        this.setState({
            cur_value: e.target.value,
        })
    }
    onKeyDown = e => {
        if (e.keyCode === 13) { //enter
            // const {todoList, cur_value} = this.state;
            // if (cur_value.trim().length > 0) {
            //     this.setState({
            //         cur_value: '',
            //         todoList: [...todoList, cur_value],
            //     })
            // } else {
            // this.setState({
            //     holder_text: "최소한 한글자 이상 입력해주세요 :)"
            // })
            // }
            this.setState(prevState =>
                produce(prevState, draft => {
                    const current = draft.cur_value;
                    if (current.trim().length > 0) {
                        draft.cur_value = "";
                        draft.todoList.push(current);
                    } else {
                        draft.holder_text = "최소한 한글자 이상 입력해주세요 :)"
                    }
                })
            )
            console.log(this.state.todoList)
        }
    }

    deleteTodo = (index) => {
        console.log(typeof index)
        const {todoList} = this.state;
        const newTodoList = todoList.filter((item, i) => i !== index);
        this.setState({
            todoList: newTodoList
        })
    }

    render() {
        const {todoList, cur_value, holder_text} = this.state;
        return (
            <div style={{width: "500px", margin: "30px auto"}}>
                <Col>
                    <h1>TodoList</h1>
                </Col>
                <Col>
                    <List
                        dataSource={todoList}
                        bordered={true}
                        renderItem={(item, index) => (
                            <List.Item
                                actions={[<Button
                                    type="danger"
                                    size="small"
                                    onClick={() => this.deleteTodo(index)}
                                >
                                    delete
                                </Button>]}
                            >
                                <List.Item.Meta
                                    title={item}
                                />
                            </List.Item>
                        )}
                    />
                    <Col style={{marginTop: "10px"}}>
                        <Input type="text" onChange={this.onChange} onKeyDown={this.onKeyDown} value={cur_value}
                               placeholder={holder_text}/>
                    </Col>
                </Col>
                <Immer_test/>
            </div>

        )
    }
}

export default TodoList;