import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        array: [{id: 1, title: "DEV", salary: "1500"}, {id: 2, title: "BA", salary: "1000"}, {id: 3, title: "PM", salary: "1800"}]
    }

    addNewJob = (job) => {
        console.log("Your object is", job)
        this.setState({
            array: [...this.state.array, job]
        })
    }

    deleteJob = (id) => {
        let currentList = this.state.array
        currentList = currentList.filter(item => item.id !== id)
        this.setState({
            array: currentList
        })
    }

    componentDidUpdate (prevProps, prevState) {
        console.log(prevState, this.state)
    }

    componentDidMount () {
        console.log("ga")
    }

    render() {
        return (
        <>
            <AddComponent addNewJob = {this.addNewJob}/>
            <ChildComponent title={"PO"} salary={"2600"} array={this.state.array} deleteJob = {this.deleteJob}/>
        </>
            
        )
        
    }
}

export default MyComponent;