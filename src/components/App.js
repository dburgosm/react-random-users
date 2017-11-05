import $ from 'jquery';
import React, { Component } from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row h-100 justify-content-center">
                <div className="col-md-4">
                    <UserDetail />
                </div>
                <div className="col-md-8">
                    <UserList />
                </div>
            </div>
        );
    }
}

export default App;