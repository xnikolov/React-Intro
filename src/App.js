import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person:[
      {name: 'Steven', age: 23},
      {name: 'Mike', age: 17},
      {name: 'Richard', age: 63}
    ]
  }
  
  handleName = (changedName) => {
    // console.log('success');
    // THIS WON'T WORK!!! this.state.person[0].name = 'Hristiyan';

    this.setState({
      person:[
        {name: 'Steven', age: 13},
        {name: changedName, age: 17},
        {name: 'Richard', age: 63}
      ]
    })
  }

  handleNameInput = (event) => {
    this.setState({
      person:[
        {name: 'Steven', age: 13},
        {name: event.target.value, age: 17},
        {name: 'Richard', age: 63}
      ]
    })
  }

  render() {
    return ( 
      <div className="App">
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}>
        </Person>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.handleName.bind(this, 'Hristiyan')}
          changeByInput={this.handleNameInput}>
          Nested text in Person
        </Person>
        <button onClick={this.handleName.bind(this, 'Omar')}>Switch name</button>
      </div> 
      
     );
    }
 
}

export default App;
