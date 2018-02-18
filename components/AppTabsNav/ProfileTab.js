import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import {Icon, Container, Content, Header, Left, Right, Body, Button} from 'native-base';

//import EntypoIcons from 'react-native-vector-icons/Entypo';

class ProfileTab extends Component{

  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{color: tintColor}}/>
    )
});

  render() {
    return (
      <Container style={{flex: 1, backgroundColor:'white' }}>
          <Header>
              <Left>
                  <Icon name="md-person-add" style={{paddingLeft: 10}}></Icon>
              </Left>
              <Body>
              <Text>Corredor </Text>
              </Body>
              <Right>
                  <Icon name="ios-send-outline" style={{paddingRight: 10}}></Icon>
              </Right>
          </Header>
          <Content>
              <View style={{ paddingTop:10 }}>
                  <View style={{flexDirection:'row'}}>
                      <View style={{flex:1, alignItems:'center'}}>
                          <Image source={require('../../assets/me.png')} style={{width:75, height:75, borderRadius:37.5}}/>
                      </View>
                      <View style={{ flex:3 }}>
                          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                              <View style={{alignItems:'center'}}>
                                  <Text>20</Text>
                                  <Text style={{fontSize:10, color:'grey'}}>Publicaciones</Text>
                              </View>
                              <View style={{alignItems:'center'}}>
                                  <Text>20</Text>
                                  <Text style={{fontSize:10, color:'grey'}}>Arrendatarios</Text>
                              </View>
                              <View style={{alignItems:'center'}}>
                                  <Text>20</Text>
                                  <Text style={{fontSize:10, color:'grey'}}>arrendadores</Text>
                              </View>
                          </View>
                          <View style={{ flexDirection:'row', paddingTop:10 }}>
                              <Button bordered dark style={{flex:3, marginLeft:10, justifyContent:'center', height:30}}>
                                  <Text>Editar Perfil</Text>
                              </Button>
                              <Button bordered dark style={{flex:1, marginLeft:5, marginRight:10, justifyContent:'center', height:30}}>
                                  <Icon name="settings" ></Icon>
                              </Button>
                          </View>
                      </View>
                  </View>
                  <View style={{ paddingVertical:10, paddingBottom:10, paddingHorizontal:10}}>
                      <Text style={{fontWeight:'bold'}}> Corredor</Text>
                      <Text> Biografia</Text>
                      <Text> pagina personal</Text>
                  </View>
              </View>
          </Content>
      </Container>
    );
  }
}
export default ProfileTab;


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
