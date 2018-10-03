import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import swal from 'sweetalert2';
import Navbar from './components/topnav';
import Todos from './components/todos';

import Todoslist from './components/todosList';

class App extends Component {
  state = {
    id:0,
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
  handleAdd= (e) => {
    e.preventDefault();
const obj ={
  id: this.state.id,
  title: this.state.title,
  description: this.state.description
}
const todos = [...this.state.counters, obj];
this.setState({counters:todos});
      console.log(this.state.counters);
      let id = this.state.id;
      id++;
      this.setState({id});
      this.setState({title:'' , description:''})

  }
handleDelete=(counterId)=>
{
  const counters = this.state.counters.filter(c => c.id !== counterId);
  this.setState({ counters });
}
handleEdit=(counter)=>{
  let id, tit, desc;
  swal({
    title: 'Firebase Realtime Todo',
    html:
    `<h2>Update Your Todo</h2>
    <input id="swal-input1" class="swal2-input" value=${counter.title} autofocus placeholder="Title" >
    <input id="swal-input2" class="swal2-input" value=${counter.description} placeholder="Description" >`,
    preConfirm: function() {
        return new Promise(function(resolve) {
            if (true) {
                resolve([
                    tit = document.getElementById('swal-input1').value,
                    desc = document.getElementById('swal-input2').value,
                    id = counter.id
                ]);
            }
        });
    }
}).then((result) => {
  const obj = {
    id: id,
    title: tit,
    description: desc
  }
  // console.log(obj);
  const counters = [...this.state.counters];   
  // console.log(counters);
  // this.setState({counters:[{id:obj}]})
  counters[id] = {...obj}
  this.setState({counters});
    swal(
        'Firebase Realtime Todo!',
        'Your Todo Has Been Updated!',
        'success'
    )
})
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
        list={this.state.counters}
        onDel={this.handleDelete}
        onEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
