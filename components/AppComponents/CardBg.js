import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from './../../constants/Colors';
import API from '../Api';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const height = width * 0.4;

export default class CardBg extends React.Component {
  constructor(props) {
    super(props);

}
removeHtmlTag(data){ 
  //Elimina los tags HTML de la descripcion
  const regex = /(<([^>]+)>)/ig;
  return data.replace(regex, '');
}
  render() {
    var prop = this.props;

    var item = this.props.item;
    var onPress = this.props.onPress;
    var horizontal = this.props.horizontal;

    return (
        <ImageBackground key={item.id} source={{uri: prop.image}} style={{width: '100%', height: '100%', marginTop:2, height:80}}>
        <TouchableOpacity style={{backgroundColor:'rgba(1,1,1, .1)', height:80, flexDirection:'row' }} onPress={onPress}>
              <Feather
                name={'chevron-right'}
                size={25}
                style={{ marginTop:30, marginLeft:20 }}
                color={'white'}
              />   
                   <Text style={styles.sectionTitle} numberOfLines={2}>{item.name}</Text>
        </TouchableOpacity>
        </ImageBackground>

    )
}
}


const styles = StyleSheet.create({
  content: {
    marginBottom: 10
  },  

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: 'white',
    marginTop:30,
    marginLeft:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,

  }
 
});