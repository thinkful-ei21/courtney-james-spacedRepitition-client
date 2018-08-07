import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';
import { getQuestionData } from '../actions/questions';
import HeaderBar from './header-bar';



export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getQuestionData());
    }

    render() {
      console.log(this.props.question);
        return (
            <div className="dashboard">
              <HeaderBar />

                {/* <div className="dashboard-username">Username: {this.props.username}</div> */}
                {/* <div className="dashboard-name">Name: {this.props.name}</div> */}
                {/* <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        question: state.question.question
        // protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
