
import React, {Component} from "react";
import ShowRow from "../ListNameData";

class SearchBatman extends Component {
    // State 
    state = {
        searching: false,
        query: '',
        shows: null
    }; 


    // Functions 
    componentDidMount = () => {
    //     const { location } = this.props;
    //     const matches = location.search.match(/^\?q=(.*)/);
    //     if (matches) {
    //         const query = matches[1];
    //         this.setState({ query });
    //         this.doSearch(query);
    //    }
        
    }

    
    // Dans cette fonction doSearch , On récupère la donnée en fonction de la query fournit
    // en argument. 
    // Etape : 
    // -    Si pas de query on initialise shows a null 
    // -    Cas contraire on récupère la donnée en format json en fonction de la query
    doSearch = query => {
        if (query.length === 0) {
            this.setState({shows: null})
            return;
        }
        this.setState({searching: true})
        fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
            .then(res => res.json())
            .then(json => this.setState({
                searching: false, 
                shows : json
            }))
            .catch(err => console.error(err));
    };

    // Dans cette fonction on recupère la query founit par l'user
    // On crée un history dans laquelle on lui rajoute la query
    // et on applique la fonction doSearch précédente pour recupérer la data
    handleSearch = (e) => {
        const {history} = this.props;
        const query = e.target.value;
        this.setState({query: query});
        history.replace(`?q=${query}`);
        this.doSearch(query);
    }

    // Render
    render () {
        const {searching, query, shows} = this.state;
        return(
            <div>
                <div>
                    <h1> Search Data Batman </h1>
                </div>
                
                <div>
                    <p>
                        <input type="search" value={query} oneChange={this.handleSearch}></input>
                    </p>
                </div>
                {searching && shows === null && <p>Searching ...</p>}
                {shows && (
                    <div>
                        <ul>
                            {shows.map(o => {
                                shows.map(o => (
                                    <ShowRow
                                        key={o.show.id}
                                        id = {o.show.id}
                                        name={o.show.name}
                                    />
                                    )
                                )
                            })
                        }

                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default SearchBatman;

