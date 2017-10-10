import React from 'react';

const UserListItem = ({user}) => {
    console.debug(user);
    return (
        <div className="card w-50">
            <img className="card-img img-fluid" src={user.picture.large} alt={user.login.username} />
        </div>
    );
};

export default UserListItem;