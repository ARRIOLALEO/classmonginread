import React from 'react';
import Input from "./components/Input"
import logo from './logo.svg';
import {Card,Button} from '@mui/material'
import './App.css';
import AllMessages from './components/AllMessages';
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      messages:[],
      newMessage:"",
      secondMessage:"",
      allert:false,
      deletedOption:false
    }
   
  }
  saveMessage = ()=>{
    this.setState({messages:[...this.state.messages,this.state.newMessage]})
    this.setState({allert:!this.state.allert})
    setTimeout(()=>{
      this.setState({allert:!this.state.allert})
    },3000)
    this.setState({newMessage:""})
  }
  handlerDelete = (index) =>{


 
      /*const deleted = [...this.state.messages]
      deleted.splice(index,1)
      this.setState({messages: deleted})*/

      /*const filtered = this.state.messages.filter((val, idx)=>{
        return idx != index
      })
  
      this.setState({messages: filtered})*/
    
    // now please filter that information and just show me the new state
    console.log(index)
    this.setState({messages:this.state.messages.filter((message,idx)=> idx !== index)})
  


  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p className={this.state.allert ? "show": "not_show"}>i added a new task</p>
          <p className={this.state.allert ? "show": "not_show"}>i added a delete</p>
          <Card style={{padding: '30px'}}>
          <Input v={this.state.newMessage} handlerInput={(e)=> this.setState({newMessage:e})}/>
          <Button variant="contained" onClick={()=> this.saveMessage()}>Add My Message</Button>
      
          <div>
            <AllMessages messages ={this.state.messages} deleteFunction={(index)=>this.handlerDelete(index)}/>
          </div>
          </Card>
        </header>
      </div>
    );
  }
}


export default App;
