import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ""
    }

    HandleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    HandleAddTodo = () => {
        if(!this.state.title){
            toast.error("Cannot keep the title blank")
            return
        }

        this.props.AddNewTodo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        })

        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={this.HandleOnChangeTitle}></input>
                <button type="button" className="add" onClick={this.HandleAddTodo}>Add</button>
            </div>
        )
    }
}

export default AddTodo;