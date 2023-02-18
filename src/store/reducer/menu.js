const initialState= {
    list: []
};

const menu = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_MENU'){
        return {...state, list: action.payload}
    }

//payload object(employee) will get added in list
if(action.type === 'ADD_MENU'){
    return {...state,  list : [...state.list, action.payload]}
}
return state;


    
};

export default menu; 