import React, { Component } from 'react';
import SearchBatman from "../components/SearchBatman";


class Search extends Component {
    state = {

    }

    render () {
        return (
            <div>
                <div>
                    <p> Dans cet exercice l'idée est de récupérer les données concernant Batman 
                        sur le serveur api.tvmaze.com de et de lister les informations importantes
                    </p>
                </div>
                <div>
                    <SearchBatman location = ""></SearchBatman>
                    
                </div> 
             </div>
        
        ) 
    }
}

export default Search;
