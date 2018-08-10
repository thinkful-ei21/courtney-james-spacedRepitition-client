import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { getQuestionData } from '../actions/questions';

import styles from './styles/dashboard.module.css';

import HeaderBar from './header-bar';
import Card from './emoji-card';
import Quiz from './emoji-form';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getQuestionData());
    }

    render() {
        const feedbackTag = (
            <p className={styles.feedback}>
              {this.props.feedback}
            </p>
        );

        return (
            <div>
                <HeaderBar />

                <div className={styles.dashboardFeedback}>
                  {this.props.userAnswered ? feedbackTag : ''}
                </div>

                <Card
                    description={this.props.question.description}
                    emoji={this.props.question.emoji}
                    userAnswered={this.props.userAnswered}
                />

                <Quiz
                    userAnswered={this.props.userAnswered}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        question: state.question.question,
        feedback: state.question.feedback,
        emojiAnswer: state.question.question.description,
        userAnswered: state.question.userAnswered
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
