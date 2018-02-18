import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Icon} from 'native-base';

class ActivityTab extends Component{

  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{color: tintColor}}/>
    )
});

  render() {
    return (
      <View style={styles.container}>
      <Text>ActivityTab</Text>
      </View>
    );
  }
}
export default ActivityTab;


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
