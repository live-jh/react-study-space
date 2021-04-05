import React, {Component} from "react"
import ErrorBoundary from "./common/ErrorBoundary";


class Message extends Component {
    render() {
        throw new Error("의도한 에러");
        return "Message Component";
    }
}

class App2 extends Component {
    render() {
        return (
            <ErrorBoundary>
                <Message/>
            </ErrorBoundary>
        )
    }
}

export default App2;
