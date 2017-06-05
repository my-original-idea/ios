import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Index from '../pages/index/Index.js';

export default class Nav extends Component {

  constructor(props){
    super(props);
  }
  render(){

    return (
      <NavigatorIOS
        initialRoute={{
          component: Index,
          title: this.props.title,
          url: this.props.url
        }}
        style={{flex: 1}}
      />
    )
  }
}
