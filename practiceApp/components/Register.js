import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Register extends Component {
  

  render(){
    return (
      <View style={styles.marg}>
        <Text style={styles.header}>Register</Text>
        <Text style={styles.text}>Name:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Email:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text} password={true}>Password:</Text>
        <TextInput style={styles.input} secureTextEntry={true}/>
        <Text style={styles.text} password={true}>Re-enter Password:</Text>
        <TextInput style={styles.input} secureTextEntry={true}/>
        <TouchableOpacity>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marg:{
    marginTop:100,
  },
  button:{
    backgroundColor:'teal',
    color:'white',
    height:35,
    lineHeight:30,
    marginTop: 15,
    textAlign:'center',
    width:250,
    marginLeft:65,
    fontSize:17
  },
  input:{
    borderColor:'black',
    borderWidth:1,
    height:45,
    width:250,
    marginLeft:65,
    marginBottom:10,
    shadowOffset: {width: 0.5, height: 0.5, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    borderRadius:5
  },
  header:{
    textAlign:'center',
    fontSize:50,
    marginBottom:20
  },
  text:{
    textAlign:'center',
    marginBottom:8,
    fontSize:20

  }

  })