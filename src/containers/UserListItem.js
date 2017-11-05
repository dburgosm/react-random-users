import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectUser} from "../actions/index";
import {bindActionCreators} from 'redux';


class UserListItem extends Component {

    render() {
        return (
            <div className="card w-50" onClick={() => this.props.selectUser(this.props.user)}>
                <img
                    className="card-img img-fluid"
                    src={this.props.user.picture.large}
                    alt={this.props.user.login.username}
                />
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);