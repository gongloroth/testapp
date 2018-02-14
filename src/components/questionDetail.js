import React from 'react';
import { View, Text } from 'react-native';

const QuestionDetail = (props) => {
  return (
    <View>
      <Text>{props.question.name}</Text>
    </View>
  );
};

export default QuestionDetail;
