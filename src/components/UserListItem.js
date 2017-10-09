import React from 'react';

const UserListItem = ({user, onUserSelect}) => {
    return (
        <div onClick={() => onUserSelect(user)} className="card w-50">
            <img className="card-img img-fluid" src={user.picture.large} alt={user.login.username} />
        </div>
    );
};

export default UserListItem;