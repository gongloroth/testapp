import React from 'react';
import { View, Text } from 'react-native';

const QuestionDetail = (props) => {
  return (
    <View>
      <Text>Question Label</Text>
      <Text>{props.question.question}</Text>
    </View>
  );
};

export default QuestionDetail;
