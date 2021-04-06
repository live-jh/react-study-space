import React, {Component} from "react"
import axios from "axios";

class EpisodeList extends Component {
    state = {
        episodeList: [],
    }

    componentDidMount() {
        const apiUrl = "http://api.tvmaze.com/search/shows";
        const params = {
            q: 'mr-robot',
            embed: 'episodes',
        };

        axios.get(apiUrl, {params})
            .then(resposne => {
                console.log(resposne)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {episodeList} = this.state;
        return (
            <div>
                <h1>EpisodeList</h1>
                {JSON.stringify(episodeList)}
            </div>
        )
    }
}

export default EpisodeList;