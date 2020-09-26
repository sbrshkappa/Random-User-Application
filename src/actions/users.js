import axios from "axios";

export const initiateAddUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/users').then((response) => {
            console.log(response.data);
            dispatch(addUsers(response.data.results));
        })
    }
}

export const addUsers = (users) => {
    return {
     type: 'ADD_USERS',
     users
    };
   };

export const searchUsers = (value) => {
    return {
        type: 'SEARCH_USERS',
        value
    };
};