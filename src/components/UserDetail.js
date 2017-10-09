import React from 'react';

const UserDetail = ({user}) => {


    if(user.length == 0) return <div>Waiting...</div>;

    return(
        <div className="card text-center">
            <div className="card-header">
                <h5><b>{user.name.first} {user.name.last}</b></h5>
            </div>
            <div className="card-block">
                <img className="card-img img-fluid" src={user.picture.large} alt={user.login.username} />
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.phone}</p>
            </div>
        </div>
    );
}

export default UserDetail;