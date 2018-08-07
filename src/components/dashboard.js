import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import emoji from 'emoji-name-map';
import { getQuestionData } from '../actions/questions';
import HeaderBar from './header-bar';
import Card from './emoji-card';



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
              {/* <span role="img"
                aria-label={this.props.question.emoji}
              >
                {emoji.get(`${this.props.question.emoji}`)}
              </span> */}

              <form>
                <label htmlFor="description">Your Answer:</label>
                <input id="description" type="text"></input>
                <button>Submit</button>
              </form>

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
