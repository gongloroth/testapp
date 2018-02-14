import React, { Component } from 'react';
import { View, Picker, ActivityIndicator } from 'react-native';

class CategoryPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isLoading: true,
    PickerValueHolder: '',
    PickerValueHolderId: ''
    };
  }

   componentWillMount() {
     console.log('componentWillMount in categoryPicker');
     fetch('https://opentdb.com/api_category.php')
     .then((response) => response.json())
     .catch((error) => {
     console.log(error);
      })
     .then((responseData) => {
       this.setState({
         isLoading: false,
         categories: responseData.trivia_categories,
       });
     });
   }

   updateCategory = (itemValue, key) => {
      this.setState({ PickerValueHolder: itemValue, PickerValueHolderId: key });
      this.props.updateState(itemValue, key);
   }

   renderCategories() {
     return this.state.categories.map((item) => (
       <Picker.Item label={item.name} value={item.name} key={item.id} />)
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
