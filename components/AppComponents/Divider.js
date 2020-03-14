import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from './../../constants/Colors';
import API from '../Api';

const { width } = Dimensions.get('window');
const height = width * 0.4;

export default class Card extends React.Component {
  constructor(props) {
    super(props);

}
  render() {
    var prop = this.props;
    var onPress = this.props.onPress;

    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
          <Text style={{flex:1, fontWeight: '500', fontSize:11, color:'#999'}}>{prop.title}</Text>
        </TouchableOpacity>
    )
}
}


const styles = StyleSheet.create({
  content: {
    backgroundColor:'white',
    marginBottom: 10
  },  
  item: {
    flexDirection:'row',
    marginBottom:2,
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:Colors.lightGray
  },  
});