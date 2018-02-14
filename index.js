//import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from './src/components/header';
//import QuestionList from './src/components/questionList';
import CategoryPicker from './src/components/categoryPicker';
import QuestionList from './src/components/questionList';

//create a component
class LoginActivity extends Component {

  static navigationOptions = {
    title: 'LoginActivity',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  updateState = (value, key) => {
    this.setState({
      placeholder: value,
      placeholderId: key,
    });
  };

  StartQuiz = () => {
    this.props.navigation.navigate('main');
    console.log('MainActivity started...');
  }

  ShowCat = () => {
    console.log(this.state);
  }

  render() {
    return (
      <View>
        <Header headerText={'Quiz App'} />
        <CategoryPicker updateState={(value, key) => { this.updateState(value, key); }} />
        <Button
         onPress={this.StartQuiz}
         title="Start Quiz"
         color="#2196F3" />
         <Button
          onPress={this.ShowCat}
          title="ShowCat"
          color="#2196F3" />
      </View>
    );
  }
}

class MainActivity extends Component {

  static navigationOptions = {
    title: 'MainActivity',
  };

  render() {
    return (
      <View>
        <Header headerText={'Quiz App'} />
        <QuestionList categoryId={this.props.placeholderId} />
      </View>
    );
  }
}

const ActivityProject = StackNavigator({
  login: { screen: LoginActivity },
  main: { screen: MainActivity }
});


//render it to the device
AppRegistry.registerComponent('testapp', () => ActivityProject);
