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
    return (
        <TouchableOpacity style={styles.item} onPress={prop.onPress}>
          <Text style={{flex:.5, fontWeight: '500', fontSize:13}}>{prop.title}</Text>
          <Text style={{flex:1, textAlign:'right', fontWeight: '100', fontSize:13}}>{prop.content}</Text>
        </TouchableOpacity>
    )
}
}


const styles = StyleSheet.create({
  item: {
    flexDirection:'row',
    marginBottom:2,
    padding:20,
    backgroundColor:'white'
  },  
});