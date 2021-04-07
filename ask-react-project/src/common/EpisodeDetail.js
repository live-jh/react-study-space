import React, {Component} from "react"

class EpisodeDetail extends Component {
    state = {
        episode: this.props.episode
    }

    render() {
        const {episode: {id, name, image: {medium: thumbUrl}}} = this.state;
        return (
            <div>
                {id} : {name}
                <img src={thumbUrl} alt={name}/>
            </div>
        )
    }
}

export default EpisodeDetail;