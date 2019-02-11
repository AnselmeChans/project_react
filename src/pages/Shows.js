import React, { Component } from 'react';
import BatmanShow from "../components/BatmanShow";

class Shows extends Component {
    state = {};
    render () {
        return(
            <div>
                <div>
                    <p> Dans cet exercice l'idée est de récupérer les données concernant Batman 
                        sur le serveur api.tvmaze.com de et de lister les informations importantes
                    </p>
                </div>
                <div>
                    <BatmanShow></BatmanShow>
                </div> 
            </div>
            
        );
    }
}

export default Shows;