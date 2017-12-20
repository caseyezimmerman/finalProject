import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Component2 extends Component {

  onPress(){
    console.log('Area Pressed')
  }

  render() {
    return (
    <View>
      <View style={styles.myView}>
        <Text style={styles.myText}>Hello World</Text>
      </View>
        <View style={styles.container}>
        <TouchableHighlight 
        onPress={this.onPress} 
        style={styles.v1}
        underlayColor="blue"
        >
          <View>
            <Text>View 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={this.onPress2}
          style={styles.v2}
        >
          <View>
            <Text>View 2</Text>
          </View>
        </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.vText}>View 3</Text>
          </View>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue',
    marginTop: 20
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection:'row',
    height:100
  },
  v1:{
    flex:1,
    backgroundColor:'lightblue',
    padding:10
  },
  v2:{
    flex:1,
    backgroundColor:'lightgreen',
    padding:10
  },
  v3:{
    flex:1,
    backgroundColor:'lightgrey',
    padding:10,
  },
  vText:{
    color:'white' //color is  property on text, not on view
  }
})

