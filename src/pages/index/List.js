import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';


export default class List extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(
        [
          'row 12165256712312312',
          'row 212123213123123',
          'row 3123123123',
          'row 11123213123',
          'row 21123123123123123',
          'row 31123123',
          'row 1212312312',
          'row 22',
          'row 32123123',
          'row 3123123123',
          'row 11123213123',
          'row 21123123123123123',
          'row 31123123',
          'row 1212312312',
          'row 22',
          'row 32123123'
        ]
      ),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          className={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <TouchableHighlight
              underlayColor='#E9EAED'
              activeOpacity={0.9}
              onPress={()=>{
                // this.props.navigator.push({
                //   component: MovieDetail,
                //   title: rowData.title,
                //   id: rowData.id
                // })
              }}>
              <View className={styles.item}>
                <Image
                  style={styles.img}
                  source={require('../../assets/img/banner.png')}
                />
                <Text className={styles.word}>{rowData}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    width:'100%',
    height:'60%',
    marginTop:10
  },
  listView:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor:'#E9EAED',
    width:'100%'
  },
  item:{
    width:60,
    borderRadius: 5,
    overflow:'hidden',
    backgroundColor:'#FFF',
  },
  img:{
    width:100,
    height:100
  },
  word:{
    height: 100,
    color: 'green'
  },
  listItem:{
    backgroundColor:'blue'
  }
})
