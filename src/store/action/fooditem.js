export const listFoodItem= () => (dispatch) =>{
    fetch('http://localhost:8585/api/foodItem/all')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_FOODITEM',payload: data}) )
}
export const addFoodItem = (data) => {
    return {
        type: 'ADD_FOODITEM',
        payload: data
    }
}