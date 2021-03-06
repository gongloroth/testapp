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
      placeholder: '',
      placeholderId: ''
    };
  }

  updateState = (value, key) => {
    this.setState({
      placeholder: value,
      placeholderId: key,
    });
  };

  StartQuiz = () => {
    this.props.navigation.navigate('main', {
      categoryId: this.state.placeholderId,
    });
    console.log('MainActivity started...');
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
      </View>
    );
  }
}

class MainActivity extends Component {

  static navigationOptions = {
    title: 'MainActivity',
  };

  render() {
    const { params } = this.props.navigation.state;
    const categoryId = params ? (params.categoryId + 9) : null;
    const encodedId = encodeURIComponent(categoryId);

    console.log(categoryId);
    console.log(encodedId);

    return (
      <View>
        <Header headerText={'Quiz App'} />
        <QuestionList categoryId={encodedId} />
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
