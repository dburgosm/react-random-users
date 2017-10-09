import React from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {

    const userItems = props.users.map((user) => {
        return (
            <UserListItem
                onUserSelect={props.onUserSelect}
                key={user.login.username}
                user={user}
            />
        );
    });

    return (
        <div className="col-md-8 user-list">
          <div className='card-columns'>
              { userItems }
          </div>
        </div>
    );
}

export default UserList;