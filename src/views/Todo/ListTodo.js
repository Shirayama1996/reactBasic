import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            {id: 1, title: "Doing homework"}, 
            {id: 2, title: "Watching TV"},
            {id: 3, title: "Playing games"}
        ],

        editTodo: {}
    }

    AddNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })

        toast.success("Wow so easy!")
    }

    DeleteTodo = (id) => {
        let currentList = this.state.listTodo
        currentList = currentList.filter(item => item.id !== id)
        this.setState({
            listTodo: currentList
        })
        toast.success("Delete successfully")
    }

    EditTodo = (item) => {
        let editTodo = this.state.editTodo
        let listTodo = this.state.listTodo
        let isEmptyObj = Object.keys(editTodo).length === 0
  
        if (isEmptyObj === false && editTodo.id === item.id) {
            let listTodoCopy = [...listTodo];
            let index = listTodoCopy.findIndex(obj => obj.id === item.id)
            listTodoCopy[index].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update successfully")
            return;
        }
        
        this.setState({
            editTodo: item
        })
        

       
    }

    handleOnChangeEditTodo = (event) => {
        let currentList = {...this.state.editTodo}
        currentList.title = event.target.value
        this.setState({
            editTodo: currentList
        })
    }

    render () {
        let listTodo = this.state.listTodo;
        let editTodo = this.state.editTodo;
        let isEmptyObj = Object.keys(editTodo).length === 0

        return (
            <>
                <p>
                Hi Shirayama
                </p>
                <div className="list-todo-container">
                <AddTodo AddNewTodo= {this.AddNewTodo}/>
                <div className="list-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>{index + 1} - <input type="text" value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)}></input></span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }
                                    
                                    <button className="edit" onClick={() => this.EditTodo(item)}>{isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}</button>
                                    <button className="delete" onClick={() => this.DeleteTodo(item.id)}>Delete</button>
                                </div>
                            )
                            
                        })
                    }
                </div>
                </div>
            </>
            
        )
        
    }
}

export default ListTodo;