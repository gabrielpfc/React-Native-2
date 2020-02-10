/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.cover} source={require('./img/Cover.jpg')}/>
        <View style={{marginTop:100}}>
              <TextInput style={styles.textInput} placeholder="Telefone ou email" />
              <TextInput style={styles.textInput} placeholder="Senha" secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.login}>
              <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
  }
}


const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create ({
  cover:{
    width: screenWidth, 
    height: 180
  },
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 2,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10
  },
  login:{
    backgroundColor: '#053D87',
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    justifyContent: 'center'
  },
  loginText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
