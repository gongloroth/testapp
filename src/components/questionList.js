import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import QuestionDetail from './questionDetail';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    console.log('componentWillMount in QuestionList');
    fetch('https://opentdb.com/api.php?amount=10&category=9')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        questions: responseData.results,
        isLoading: false
       });
    });
  }

renderQuestions() {
  return this.state.questions.map(
      questions => <QuestionDetail key={questions.question} question={questions} />
    );
}

  render() {
     if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    console.log(this.props.categoryId);
    console.log(this.state);

    return (
      <View>
        { this.renderQuestions() }
      </View>
    );
  }
}

export default QuestionList;
