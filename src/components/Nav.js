import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Banner from '../pages/index/Banner.js';

export default class Nav extends Component {

  constructor(props){
    super(props);
  }
  render(){

    return (
      <NavigatorIOS
        initialRoute={{
          component: Banner,
          title: this.props.title,
          url: this.props.url
        }}
        style={{flex: 1}}
      />
    )
  }
}
