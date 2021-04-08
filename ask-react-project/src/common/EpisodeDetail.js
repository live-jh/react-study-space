import React, {Component} from "react"
import {Card} from "antd";

class EpisodeDetail extends Component {
    state = {
        episode: this.props.episode
    }

    render() {
        const {episode: {id, name, image: {medium: thumbUrl}}} = this.state;
        return (
            <Card
                style={{width: '240px'}}
                cover={<img alt={name} src={thumbUrl}/>}
            >
                <Card.Meta title={name}/>
            </Card>
        )
    }
}

export default EpisodeDetail;