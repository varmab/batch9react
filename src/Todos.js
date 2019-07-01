import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:'',
            purpose:''
        }

       
    }

    onTodoChange=(e)=>{
        // var field=event.target;
        // var fieldName=field.name;

        // if(fieldName=="todo"){
        //     this.setState({
        //         todo:field.value
        //     })
        // }

        // if(fieldName=="purpose"){
        //     this.setState({
        //         purpose:field.value
        //     })
        // }

        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addTodo=(e)=>{
        e.preventDefault();

        this.setState({
            todos:[
                ...this.state.todos,
                {
                    todo:this.state.todo,
                    purpose:this.state.purpose
                }
            ]
        })
    }

    removeTodo=(t)=>{
        this.setState({
            todos:this.state.todos.filter((currentTodo)=>{
                return currentTodo.todo!=t;
            })
        })
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="Enter todo" onChange={this.onTodoChange} name="todo"/>
                <input type="text" placeholder="Enter purpose" onChange={this.onTodoChange} name="purpose"/>
                <button onClick={this.addTodo}>Add Todo</button>
                <ul>
                    {
                        this.state.todos.map((t)=>{
                            return <li key={t.todo}>{t.todo} - {t.purpose}<button onClick={
                                ()=>{
                                    this.removeTodo(t.todo)
                                }
                        }>Remove</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;