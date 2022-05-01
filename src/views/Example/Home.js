import React from "react";
// import {withRouter} from "react-router-dom";
import Color from "../HOC/Color";
import logo from "../../assets/images/doraemon.jpg";
import {connect} from "react-redux"

class Home extends React.Component {
    // componentDidMount() {
    //     // setTimeout(() => {
    //     //     this.props.history.push("/todo")
    //     // }, 3000)
    // }
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        let dataRedux = this.props.dataRedux;
        return (
            <>
                <div>This is my home</div>
                <div>
                    <img src={logo} alt="doremon"/>
                </div>
                {dataRedux && dataRedux.length > 0 &&
                    dataRedux.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} <button type="button" onClick={() => this.handleDeleteUser(item)}>X</button>
                            </div>
                        )
                        
                    })
                }
                <button type="button" onClick={this.handleCreateUser}>Add new</button>
            </>
            
        )
    }   
}

const mapStateToProps = (state) => {
    return {dataRedux: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (user) => dispatch({type: "DELETE_USER", payload: user}),
        addUserRedux: () => dispatch({type: "CREATE_USER"})
    }
}

// export default withRouter(Home)
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))