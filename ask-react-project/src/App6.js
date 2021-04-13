import React, {createContext, useContext} from "react";

const MessageContext = createContext();

//ContextAPI Example
// const App6 = () => (
//     <MessageContext.Provider value="Provider Values">
//         <Level1 message="ContextAPI in React"/>
//     </MessageContext.Provider>
// )
//
// const Level1 = () => <Level2/>;
// const Level2 = () => <Level3/>;
// const Level3 = () => (
//     <div>
//         <MessageContext.Consumer>
//             {(message) => <>Level3 : {message}</>}
//         </MessageContext.Consumer>
//     </div>
// );


//hoc component example
const Level2Wrapper = () => {
    const message = useContext(MessageContext); //소비하는 userContext 세팅
    return (
        <div>
            {/* 사용시 Consumer */}
            {/*<MessageContext.Consumer>*/}
            {/*    {(message) => <Level2 message={message}/>}*/}
            {/*</MessageContext.Consumer>*/}
            <Level2 message={message}/>
        </div>
    )
}

const Level2 = ({message}) => (
    <div>
        Level2: {message}
    </div>
)
const App6 = () => (
    // setting할때는 Provider
    <MessageContext.Provider value="Provider HOC Values">
        <Level2Wrapper/>
    </MessageContext.Provider>
)
export default App6;