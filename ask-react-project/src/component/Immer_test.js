import React from "react";
import {produce} from "immer";

const immer_test = props => {

    const baseState = [
        {todo: "learn es6", done: true},
        {todo: "Try immer", done: false}
    ]

    //react
    const newState = [
        ...baseState.map((elem, index) => {
            console.log(elem)
            if (index === 1) return {...elem, done: true}
            else return elem
        }),
        {
            todo: "tweet about it",
        }
    ]

    //immer
    const newState2 = produce(baseState, draftState => {
        draftState.push({todo: "tweet about it"})
        draftState[1].done = true
    })

    console.log(newState)
    console.log(newState2)

    return (
        <div>
            <p>Hi</p>
        </div>
    )

}

export default immer_test;