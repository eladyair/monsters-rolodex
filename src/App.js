import React, { Component } from 'react';
import './App.css';
// Components
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleChange = e => {
        this.setState({ searchTerm: e.target.value });
    };

    render() {
        const { monsters, searchTerm } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()));
        return (
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox handleChange={this.handleChange} placeholder='search monsters' />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
