import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Icon} from 'native-base';

class AddMediaTab extends Component{

  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-camera" style={{color: tintColor}}/>
    )
});

  render() {
    return (
      <View style={styles.container}>
      <Text>AddMediaTab</Text>
      </View>
    );
  }
}
export default AddMediaTab;


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
