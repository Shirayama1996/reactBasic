import React from "react";

class ChildComponent extends React.Component {
    state = {
        status: false
    }

    handleShowHide = () => {
        this.setState({
            status: !this.state.status
        })
    }

    handleDelete = (id) => {
        this.props.deleteJob(id)
    }

    render() {
        return (
        <>  
            {this.state.status === false && <button onClick={this.handleShowHide}>Show</button>}
            {this.state.status === true &&
            <>
            <div>Child component title is {this.props.title} and salary is {this.props.salary}</div>
            <div className="job-list">
                {
                    this.props.array.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.id} - {item.title} - {item.salary} &nbsp; <button onClick={() => this.handleDelete(item.id)}>X</button>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={this.handleShowHide}>Hide</button>
            </>
            }
        </>
            
        )
        
    }
}

// const ChildComponent = (props) => {

//         return (
//                 <>
//                     <div>Child component title is {props.title} and salary is {props.salary}</div>
//                     <div className="job-list">
//                         {
//                             props.array.map((item, index) => {
//                                 if (item.salary >= 20) {
//                                     return (
//                                         <div key={index}>
//                                             {item.id} - {item.title} - {item.salary}
//                                         </div>
//                                     )
//                                 }
//                             })
//                         }
//                     </div>
//                 </>
                    
//         )
                
    
// }

export default ChildComponent;