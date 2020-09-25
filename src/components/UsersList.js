import React, { useState } from 'react';
import { connect } from 'react-redux';
import User from './User';
import {searchUsers} from '../actions/users';

const UsersList = (props) => {

  const userFilterOnChange = (event) => {
      props.searchUsers(event.target.value);
  }

 return (
  <>
  <label htmlFor="search">Search by Name:</label>
  <input type="text" value={props.inputValue} onChange={userFilterOnChange}/>
  <div className="user-list">
   { props.users && props.users.map((user) => <User key={user.login.uuid} {...user} /> ) }
  </div>
  </>
 );
};

const mapStateToProps = (state) => {
 return {
   users: state.filteredUsers,
   inputValue: state.value
 };
};

export default connect(mapStateToProps, {searchUsers})(UsersList);