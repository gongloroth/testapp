import React from 'react';
import { Text } from 'react-native';
import Card from './card';

const QuestionDetail = (props) => {

  return (
    <Card>
      <Text>Question Label</Text>
      <Text style={styles.textStyle}>{ (props.question.question) }</Text>
    </Card>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center'
  }
};

export default QuestionDetail;
