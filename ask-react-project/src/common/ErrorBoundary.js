import React, {Component} from "react"

class ErrorBoundary extends Component {
    state = {error: null}

    static getDerivedStateFromError(error) {
        return {error};
    }
    
    render() {
        const { error } = this.state;
            if( error !== null ) {
                return (
                    <div>
                        <h3>Wrong!!</h3>
                        <div>{error.toString()}</div>
                    </div>
                )
            } else {
                return this.props.children;
            }
    }
}

export default ErrorBoundary;