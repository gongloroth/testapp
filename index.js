//import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
//import QuestionList from './src/components/questionList';
import CategoryPicker from './src/components/categoryPicker';

//create a component
class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Quiz App'} />
        <CategoryPicker />
      </View>
    );
  }
}

//render it to the device
AppRegistry.registerComponent('testapp', () => App);
