export const listMenu= () => (dispatch) =>{
    fetch('http://localhost:8383/api/menu/allmenu')
    .then(response=> response.json())
    .then(data=> dispatch({type: 'GET_LIST_MENU',payload: data}) )
}
export const addmenu = (data) => {
    return {
        type: 'ADD_MENU',
        payload: data
    }
}