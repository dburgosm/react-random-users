import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {

        var user = this.props.user;

        if (this.props.user == null){
          if(this.props.users.length > 0) {
              user = this.props.users[0];
          } else {
              return <div>Waiting...</div>;
          }
        }

        return (
            <div className="card text-center">
                <div className="card-header">
                    <h5><b>{user.name.first} {user.name.last}</b></h5>
                </div>
                <div className="card-block">
                    <img className="card-img img-fluid" src={user.picture.large} alt={user.login.username}/>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">{user.phone}</p>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        user: state.userActive,
        users: state.users
    }
}

export default connect(mapStateToProps)(UserDetail);