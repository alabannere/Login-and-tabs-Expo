import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from './../../constants/Colors';
import { Feather } from '@expo/vector-icons';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    var prop = this.props;
    var icon = <Feather name={prop.icon} size={16} /> ;
    var iconLeft = <Feather name={prop.iconLeft} size={14} /> ;
    var title = <Text style={[styles.title, {color: prop.color ? prop.color : '#fff' }]}>{prop.iconLeft ? iconLeft : ''} {prop.title}</Text>;
    return (
      prop.type === 'item'? 
      <TouchableOpacity style={[styles.item, {marginVertical:20}]} onPress={prop.onPress} >
              <Text style={[styles.title, {color: prop.color ? prop.color : '#000', textAlign:'center', fontSize:13}]}>{prop.title}</Text>
      </TouchableOpacity>
      : 
      <TouchableOpacity style={[styles.content, {backgroundColor: prop.bg ? prop.bg : Colors.primary, borderRadius: prop.round ? 30 :5, paddingHorizontal:30, paddingVertical: this.props.sm ? 10 : 18}]} 
      disabled={prop.disable ? true : null}
      onPress={prop.disable === true ? null : prop.onPress} >
              {prop.title ? title : icon}
      </TouchableOpacity>


    )
}
}


const styles = StyleSheet.create({
  content: {
    margin:0,
    textAlign:'center',
  },
  title: {
    textAlign:'center',
    fontSize: 13,
    fontWeight: '700',
  },
  item: {
    marginBottom:2,
    padding:20,
    backgroundColor:'white',

  },  
});