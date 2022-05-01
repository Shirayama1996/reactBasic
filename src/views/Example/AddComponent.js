import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: ""
    }

    salaryhandleOnChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    salaryhandleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    
    handleOnClick = (event) => {
        event.preventDefault()
        console.log(this.state)

        if(!this.state.title || !this.state.salary) {
            alert("Cannot keep the title or salary blank")
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: "",
            salary: ""
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job title:</label><br/>
                <input type="text" value={this.state.title} onChange={this.salaryhandleOnChangeTitleJob}/><br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text" value={this.state.salary} onChange={this.salaryhandleOnChangeSalary}/><br/><br/>
                <input type="submit" value="Submit" onClick={this.handleOnClick}/>
            </form> 
        )
    }
}

export default AddComponent;