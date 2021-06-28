import React from "react"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics"
import Section from "./Section/Section"
import Notification from "./Notification/Notification"

 class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleBtnClick = (e) => {
    const { name } = e.target
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    return (good / this.countTotalFeedback()) * 100
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleBtnClick} />

          {this.countTotalFeedback() < 1 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          )}
        </Section>
      </>
    )
  }
}

export default App