// export const listRestaurant= () => (dispatch) =>{
//     fetch('http://localhost:8383/api/restaurant/allrestaurant')
//     .then(response=> response.json())
//     .then(data=> dispatch({type: 'GET_LIST_RESTAURANT',payload: data}) )
// }

 export  const  addRestaurant = (data) => {
     
    return {
        type: 'ADD_RESTAURANT',
        payload: data
    }
}

 