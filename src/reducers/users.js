const initialState = {
  users: [],
  value: '',
  filteredUsers: []
}
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
     case 'ADD_USERS':
      return {...state, users: [...state.users, ...action.users], filteredUsers: [...state.users, ...action.users]};
     case 'SEARCH_USERS':
      const {value} = action;
      const filteredUsers = state.users.filter(user => user.name.first.toLowerCase().includes(value.toLowerCase()));
      return {...state, value, filteredUsers};
    default:
      return state; 
    }
   };
   export default usersReducer;