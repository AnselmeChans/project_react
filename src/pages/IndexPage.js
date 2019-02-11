
import React, { Component } from 'react';
import Hello from "../components/Hello";
import Select from "../components/Select"

const options = [
    {label: "One", value: "one"}, 
    {label: "Two", value: "two"},
    {label: "Three", value : "three"}
]

class Home extends Component {
    // state
    state = {
        selectValue: null
    }

    // Function 
    handleSelectChange = value => this.setState({selectValue: value});



    // Render
    render() {
        const {selectValue} = this.state
        return (
            <div>
                <div>
                    <Hello name="Hans"></Hello>
                    <h1> Bienvenue sur la page de TP ReactJS</h1>
                </div>
                <div>
                    <h2> Exercice n°1</h2>
                    <p> Cet exercice consiste à lister des labels et à partir
                        de la gestion des évenements de delister la liste en attribuant au 
                        boutton le nom de la liste choisie par l'utilisateur
                    </p>
                </div>
                <div>
                    <Select
                        value={selectValue}
                        options={options}
                        oneChange = {this.handleSelectChange}
                    >
                    </Select>

                </div>
                
            </div>
        );
    }


}

export default Home;
