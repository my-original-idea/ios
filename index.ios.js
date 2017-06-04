import React, { Component } from 'react';
import Nav from './src/components/Nav';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';
import icons from './src/constants/constants';

export default class ios extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentPart:'1'
    }
  }

  _onPressPart1(){
    this.setState({currentPart:'1'});
  }
  _onPressPart2(){
    this.setState({currentPart:'2'});
  }
  _onPressPart3(){
    this.setState({currentPart:'3'});
  }
  _onPressPart4(){
    this.setState({currentPart:'4'});
  }


  render() {
    const {currentPart} = this.state;
    return (
      <TabBarIOS
       unselectedTintColor="grey">
       <TabBarIOS.Item
         title="晒美食"
         icon={{uri: icons.food}}
         selected={currentPart=='1'?true:false}
         onPress={()=>this._onPressPart1()}>
         <Nav url="/movie/in_theaters" title="晒美食"></Nav>
       </TabBarIOS.Item>
      <TabBarIOS.Item
        title="搭伙饭"
        icon={{uri: icons.share}}
        selected={currentPart=='2'?true:false}
        onPress={()=>this._onPressPart2()}>
        <Nav url="/movie/coming_soon" title="搭伙饭"></Nav>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="饭聊"
        icon={{uri: icons.chat}}
        selected={currentPart=='3'?true:false}
        onPress={()=>this._onPressPart3()}>
        <Nav url="/movie/coming_soon" title="饭聊"></Nav>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="个人"
        icon={{uri: icons.personal}}
        selected={currentPart=='4'?true:false}
        onPress={()=>this._onPressPart4()}>
        <Nav url="/movie/coming_soon" title="个人"></Nav>
      </TabBarIOS.Item>

    </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ios', () => ios);
