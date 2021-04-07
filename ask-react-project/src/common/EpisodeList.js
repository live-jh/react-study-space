import React, {Component} from "react"
import axios from "axios";
import EpisodeDetail from "./EpisodeDetail";

class EpisodeList extends Component {
    state = {
        episodeList: [],
    }

    async componentDidMount() {
        const apiUrl = "http://api.tvmaze.com/singlesearch/shows";
        const params = {
            q: 'mr-robot',
            embed: 'episodes',
        };

        try {
            const response = await axios.get(apiUrl, {params})
            console.log(response)
            const {data: {_embedded: {episodes}}} = response;
            this.setState({
                episodeList: episodes
            });
        } catch (e) {
            console.error(e);
        }

        // axios.get(apiUrl, {params})
        //     .then(resposne => {
        //         const {data: {_embedded: {episodes}}} = response;
        //         this.setState({
        //             episodeList: episodes
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    render() {
        const {episodeList} = this.state;
        return (
            <div>
                <h1>EpisodeList</h1>
                {
                    episodeList.map(episode =>
                        <EpisodeDetail episode={episode}/>
                    )
                }
                {/*{JSON.stringify(episodeList)}*/}
            </div>
        )
    }
}

export default EpisodeList;