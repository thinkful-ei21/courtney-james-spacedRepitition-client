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
    return {
        username: state.auth.currentUser.username,
        question: state.question.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
