import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getQuestionData } from '../actions/questions';

import HeaderBar from './header-bar';
import Card from './emoji-card';
import Quiz from './emoji-form';



export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getQuestionData());
    }

    render() {
      console.log(this.props.question.emoji);
        return (
            <div className="dashboard">
              <HeaderBar />

              <Card
                description={this.props.question.description}
                emoji={this.props.question.emoji}
              />

              <Quiz />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        question: state.question.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
