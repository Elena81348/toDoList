
import { Component } from "react";
import check from './check.png'

export class List extends Component{
state={
    userInput:'',
    toDoList:[]
}
changeEvent(e){
this.setState({userInput:e});
console.log(e)
}
addItem(input){
    if (input===''){
        alert('Enter an item!')
    }else{
        let listArray=this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList:listArray, userInput:''})
    }
}
crossedWord(event){
    const li=event.target;
    li.classList.toggle('crossed');
}
deleteItem(){
    let listArray=this.state.toDoList;
    listArray=[];
    this.setState({toDoList:listArray})
}
formSubmit(e){
    e.preventDefault();
}

    render(){
        return(
            <form onSubmit={this.formSubmit}>
            <div className="container">
                <input type='text'
                placeholder='What are your plans for today?'
                onChange ={(e)=>{this.changeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button  onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.toDoList.map((item,index)=>(
                    <li onClick={this.crossedWord} key={index}>
                    <img src={check} width='20px' alt='check'/>
                        {item}
                    </li>
                ))}
            </ul>
            <div className="container">
                <button  onClick={()=>this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
        )
    }
}