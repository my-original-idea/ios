import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Banner from './Banner.js';
import List from './List.js';


export default class Index extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return <View style={styles.index}>
      <Banner/>
      <List />
    </View>
  }
}


const styles = StyleSheet.create({
  index:{
    height: '100%',
    width:'100%'
  }
})
