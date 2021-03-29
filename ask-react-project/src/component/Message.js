import React, {Component} from "react";
import styles from "../static/css/Message.module.scss";

class Message extends Component{
    render() {
        return (
            <div className={styles.wrapper}>
                Message Component
            </div>
        )
    }
}

export default Message;