import React, { Component } from 'react';
import { View, Picker, ActivityIndicator } from 'react-native';

class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isLoading: true,
    PickerValueHolder: '',
    };
  }

   componentWillMount() {
     console.log('componentWillMount in QuestionList');
     fetch('https://opentdb.com/api_category.php')
     .then((response) => response.json())
     .then((responseData) => {
       this.setState({
         isLoading: false,
         categories: responseData.trivia_categories
          });
     });
   }

   updateCategory = (itemValue) => {
      this.setState({ PickerValueHolder: itemValue });
   }

   renderCategories() {
     return this.state.categories.map((item, key) => (
       <Picker.Item label={item.name} value={item.name} key={key} />)
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

      console.log(this.state);

      return (
        <View>
          <Picker selectedValue={this.state.PickerValueHolder} onValueChange={this.updateCategory}>
            {this.renderCategories()}
          </Picker>
        </View>
      );
   }
}

export default CategoryPicker;
