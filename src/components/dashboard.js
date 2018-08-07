import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import emoji from 'emoji-name-map';
import { getQuestionData } from '../actions/questions';
import HeaderBar from './header-bar';



export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getQuestionData());
    }

    render() {
      console.log(this.props.question.emoji);
        return (
            <div className="dashboard">
              <HeaderBar />
              {/* <p>{emoji.get(`${this.props.question.emoji}`)}</p> */}
              <span role="img"
                aria-label={this.props.question.emoji}
              >
                {emoji.get(`${this.props.question.emoji}`)}
              </span>

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
