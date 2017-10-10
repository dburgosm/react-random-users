import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListItem from '../components/UserListItem';

class UserList extends Component {

     userItems() {
         return this.props.users.map((user) => {
             return (
                 <UserListItem
                     key={user.login.username}
                     user={user}
                 />
             );
         });
     }

     render() {
         return (
             <div className="col-md-8 user-list">
                 <div className='card-columns'>
                     { this.userItems() }
                 </div>
             </div>
         );
     }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(UserList);