import React, {Component} from "react";
import {Button, Col, Input, List} from "antd";

class TodoList extends Component {
    state = {
        todoList: ['study python', 'study django', 'study react'],
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
            const {todoList, cur_value} = this.state;
            if (cur_value.trim().length > 0) {
                this.setState({
                    cur_value: '',
                    todoList: [...todoList, cur_value],
                })
            } else {
                this.setState({
                    holder_text: "최소한 한글자 이상 입력해주세요 :)"
                })
            }
        }
    }

    deleteTodo = (index) => {
        const {todoList} = this.state;
        todoList.splice(index, 1)
        this.setState({
            todoList: todoList
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
            </div>
        )
    }
}

export default TodoList;