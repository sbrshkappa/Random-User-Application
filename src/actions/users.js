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