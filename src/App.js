import React, { Component } from "react";
import "./App.css";

import { CardList } from './components/card-list/card-list.component';
import { SearcBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleFunction = this.handleFunction.bind(this);
  }

  handleFunction =  (e) => {
    this.setState({searchField: e.target.value});
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (  
      <div className="App">
        <SearcBox 
          placeholder = "Search Monsters" 
          handleFunction = {this.handleFunction}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  } 

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
}

export default App;
