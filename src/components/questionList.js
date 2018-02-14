import React, { Component } from 'react';
import { View } from 'react-native';
import QuestionDetail from './questionDetail';

class questionList extends Component {
  state = { questions: [] };

  componentWillMount() {
    console.log('componentWillMount in QuestionList');
    fetch('https://opentdb.com/api_category.php')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ questions: responseData.trivia_categories });
    });
  }

renderQuestions() {
  return this.state.questions.map(
      question => <QuestionDetail key={question.name} question={question} />
    );
}

  render() {
    console.log(this.state);

    return (
      <View>
        { this.renderQuestions() }
      </View>
    );
  }
}

export default questionList;
