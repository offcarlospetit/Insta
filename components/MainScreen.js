import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform
} from "react-native";
import {TabNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import HomeTab from './AppTabsNav/HomeTab';
import SearchTab from './AppTabsNav/SearchTab';
import ActivityTab from './AppTabsNav/ActivityTab';
import ProfileTab from './AppTabsNav/ProfileTab';
import AddMediaTab from './AppTabsNav/AddMediaTab';

class MainScreen extends Component{

  static navigationOptions = ({ navigation }) => ({
      header:null
});

  render() {
    return (
      <AppTabNavigator/>
    );
  }
}
export default MainScreen;

const AppTabNavigator = TabNavigator({
  HomeTab:{
    screen:HomeTab
  },
  SearchTab:{
    screen:SearchTab
  },
  AddMediaTab:{
    screen:AddMediaTab
  },
  ActivityTab:{
    screen:ActivityTab
  },
  ProfileTab:{
    screen:ProfileTab
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    sytle:{
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showIcon: true,
    showLabel: false
  }
})

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
