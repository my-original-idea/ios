import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';


export default class Banner extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return <View style={styles.banner}>
      <Text>
        this is banner!
      </Text>
    </View>
  }
}


const styles = StyleSheet.create({
  banner:{
    marginTop:50,
    height:200,
    backgroundColor:'#E9E9E9'
  }
})
