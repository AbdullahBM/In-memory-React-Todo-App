import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Navbar from './components/topnav';
import Todos from './components/todos';

import Todoslist from './components/todosList';

class App extends Component {
  state = {
        title: '',
    description: '',
    counters:[]
  };
  
  handlTitle = (e) => {
    
    //  this.state.title = e.target.value;
    
    this.setState({title : e.target.value} , ()=>{
      console.log('test', this.state.title);
    });
    

  };

  handlDescription = (e) => {
    
    // this.state.description = e.target.value;
    this.setState({description : e.target.value} , ()=>{
      console.log('test', this.state.description);
    });
  };
  handleAdd= () => {
const obj ={
  title: this.state.title,
  description: this.state.description
}
const todos = [...this.state.counters, obj];
this.setState({counters:todos});
      console.log(this.state.counters);
      this.setState({title:'' , description:''})

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <br/> <br/>
        <Todos 
        title={this.state.title}
        description={this.state.description}
        onAdd={this.handleAdd}
        handleTitle={this.handlTitle}
            handleDescription={this.handlDescription}/>
        <br/> <br/>
        <Todoslist
        list={this.state.counters} />
      </div>
    );
  }
}

export default App;
