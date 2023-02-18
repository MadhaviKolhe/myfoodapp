const initialState= {
    list: []
};

const restaurant = (state =initialState, action)=>{

    //payload object(todo) will get added in list
    if(action.type === 'ADD_RESTAURANT'){
        return {...state,  list : [...state.list, action.payload]}
    }
    // else
    // if(action.type === 'GET_LIST_RESTAURANT'){
    //     return {...state, list: action.payload}
    // }
    return state;
};

export default restaurant; 