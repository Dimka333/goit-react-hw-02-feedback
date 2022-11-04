import { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (e) => {
    this.setState((prevState) => ({
      [e]: prevState[e] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round(((this.state.good / total) * 100));
  };

  render() {
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleFeedback={this.handleFeedback}
          />

        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics bad={this.state.bad} neutral={this.state.neutral} good={this.state.good}
                        total={() => this.countTotalFeedback()}
                        positiveFeedback={() => this.countPositiveFeedbackPercentage()}></Statistics>
          ) : (
           <Notification message="No feedback given"></Notification>
          )
          }

        </Section>
      </>
    );
  };
}


