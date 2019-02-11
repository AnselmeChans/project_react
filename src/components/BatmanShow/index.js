import React, {Component} from "react";
import ShowRows from "../ListNameData"

class BatmanData extends Component {
    // State
    state = {
        loading: true
    };

    // Functions 
    componentDidMount = () => {
        fetch('https://api.tvmaze.com/search/shows?q=batman')
            .then(res => res.json())
            .then(json =>
                    this.setState({
                        loading: false,
                        shows: json
                    })
                )
            .catch(err => console.log(err));
                    
    };
    // Render
    render () {
        const {loading, shows} = this.state;
        return (
            <div>
                <h1> Batman Shows </h1>
                {loading && <p>...Loading</p>}
                {!loading && (
                    <div>
                        <p> Found {shows.length} Batman shows</p>
                        {shows.map(o => (
                            <ShowRows
                                key={o.show.id}
                                id = {o.show.id}
                                name = {o.show.name}
                            >
                            </ShowRows>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
export default BatmanData;



