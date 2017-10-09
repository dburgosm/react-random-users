import $ from 'jquery';
import React, { Component } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            selectedUser: []
        }

        this.loadUsers();
    }

    loadUsers() {
        $.getJSON('https://randomuser.me/api/?results=84&gender=female')
            .then(({ results }) => {
                this.setState({
                    users: results,
                    selectedUser: results[0]
                });
            });
    }


    render() {
        return (
            <div className="row h-100 justify-content-center">
                <div className="col-md-4">
                    <UserDetail user={this.state.selectedUser} />
                </div>
                <div className="col-md-8">
                    <UserList
                        onUserSelect={ selectedUser => this.setState({selectedUser}) }
                        users={this.state.users}
                    />
                </div>
            </div>
        );
    }
}

export default App;