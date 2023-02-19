const initialState= {
    list: []
};

const fooditem = (state =initialState, action)=>{

    if(action.type === 'GET_LIST_FOODITEM'){
        return {...state, list: action.payload}
    }

//payload object(employee) will get added in list
if(action.type === 'ADD_FOODITEM'){
    return {...state,  list : [...state.list, action.payload]}
}
return state;


    
};

export default fooditem; 