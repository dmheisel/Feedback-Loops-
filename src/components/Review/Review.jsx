import React, { Component } from 'react';
import {connect} from 'react-redux'

class Review extends Component {

  handleSubmit = () => {

  }
  render() {
    return (
      <div>
        <h1> Review your feedback:</h1>
        <div>
          <h3>Feelings: {this.props.feedback.feeling}</h3>
          <h3>Understanding: {this.props.feedback.understanding}</h3>
          <h3>Support: {this.props.feedback.support}</h3>
          <h3>Comments: {this.props.feedback.comments}</h3>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
//adds redux state to props of this component to access in render
const mapStateToProps = reduxStore => ({
  feedback: reduxStore.feedbackReducer
})
export default connect(mapStateToProps)(Review);
