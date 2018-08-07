import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        // let logOutButton;
        // if (this.props.loggedIn) {
        //     logOutButton = (
        //         <button onClick={() => this.logOut()}>Log out</button>
        //     );
        // }
        return (
            <div className="header-bar">
                {/* <h1>Foo App</h1> */}
                {/* {logOutButton} */}
                <h1>Hi, {this.props.username}</h1>
                <button onClick={() => this.logOut()}>Log out</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username
  };
};

export default connect(mapStateToProps)(HeaderBar);
