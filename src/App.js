import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'
class App extends Component {
  state={
    persons:[
      { name:'max',age:28},
      {name:'mamu',age:29}  
    ]
  } 
  
  switchNameHandler=(newname)=>{
    // console.log('was Clicked')
    // this.state.persons[0].name='maximulum' 
    this.setState({ 
      persons:[
        { name:newname,age:28},
        {name:'mamu',age:29}  
      ] 
    })
  }
  nameChangerHandler=(event)=>{
    this.setState({
      persons:[
        { name:'max',age:28},
        {name:event.target.value,age:29}  
      ] 
    }
 
    )
  }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
      <h1>Hello,this my first react app</h1>
      <h2>this subtitle</h2>
      <button style={style}
      onClick={() => this.switchNameHandler('Maximulum')} 
      type="">
      Switch Name {this.state.persons[0].name}</button>
      <Person click={this.switchNameHandler.bind(this,'max')}
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
      <Person 
      click={this.switchNameHandler.bind(this,'mx')}   
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed={this.nameChangerHandler}>
      My Hobbies:Racing</Person>
      </div>
    );

    // return (React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello,this my first react app')));
  }
}

export default App;
