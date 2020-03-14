import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Colors from './../../constants/Colors';
const { width } = Dimensions.get('window');
const height = width * 0.4;
import { Feather, Ionicons } from '@expo/vector-icons';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

}


  render() {
    var prop = this.props;
    var onPress = this.props.onPress;
    var horizontal = this.props.horizontal;

    return (
      <View >

      { horizontal ? 
        <TouchableOpacity style={[styles.content, {padding:0}]} onPress={onPress}>
        <View style={{flexDirection:'row', padding:10, alignItems: 'center'}} >

            {prop.image?
              <Image style={{width:90, height:90, backgroundColor:Colors.lightGray }} source={{uri: prop.image}}  />
              :null
            }
            
            {prop.icon?
              <Feather name={prop.icon} size={prop.iconSize ?prop.iconSize :20} style={{margin:10}} />
              :null
            }            
          <View style={[styles.sectionContainer, {padding:10}]}>
            <Text style={styles.sectionTitle} numberOfLines={1}>{prop.title}</Text>


            <Text style={styles.sectionDescription} numberOfLines={2}>{prop.content}</Text>
          </View>
        </View>
        </TouchableOpacity>

        :

        <TouchableOpacity style={[styles.content, {padding:10}]} onPress={onPress}>
          <View style={{padding:10}}>
          <Image style={{width: '100%', height:height, backgroundColor:Colors.lightGray }} source={{uri: prop.image}}  />
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} numberOfLines={1}>{prop.title}</Text>
              <View style={{marginTop:10, alignItems:'flex-end'}} >
              <Text style={styles.sectionDescription}>{prop.content}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

      }
      </View>
    )
}
}


const styles = StyleSheet.create({
  content: {
    backgroundColor:'white',
    marginBottom: 0,
    borderBottomWidth:2,
    borderBottomColor:Colors.lightGray
  },  
  sectionTitle: {
    fontWeight: '500', 
    fontSize:13,
    color: Colors.darkGray,
    marginBottom:5
  },
  sectionDescription: {
    marginTop: 0,
    fontWeight: '100', 
    fontSize:13,
    marginTop:5,
    width:250

  },

 
});