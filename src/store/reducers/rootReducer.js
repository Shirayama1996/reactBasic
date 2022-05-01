const initState = {
    users: [
        {id: 1, name: "Peter"},
        {id: 2, name: "Jack"}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_USER") {
        let users = state.users;
        users = users.filter(item => item.id !== action.payload.id)
        return {
            ...state, users
        }
    }
    else if (action.type === "CREATE_USER") {
        let id = Math.floor(Math.random() * 10001)
        let user = {
            id: id,
            name: `random - ${id}`
        }
        return {
            ...state, users: [...state.users, user]
        }
            
    }
    
    else {
        return state;
    }
}

export default rootReducer;