import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const height = width * 0.7;

export default class SliderCards extends React.Component {

  goProduct(id, title){
    this.props.navigation('Product', {id:id, title:title}) 
  }

  render() {
    var item = this.props.item;
    var title = this.props.title;
    var onPress = this.props.onPress;

    
    if (item && item.length) {
      return (
        <View style={styles.scrollContainer}>

          {title ? <Text style={styles.title}>{title}</Text> : null}




          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {item.map((item,i) => (

                <TouchableOpacity key={i} style={styles.content} onPress={()=> this.goProduct(item.id, item.title)}>
                    <View style={styles.child}>
                      {item.image?
                        <Image style={styles.image} source={{uri: item.image}} />
                          :null
                      }  

                      {item.icon?
                          <Feather name={item.icon} size={25} style={{margin:10, color:'#fff'}}  />
                          :null
                      }   


                      <View style={styles.sectionContainer}>
                        <Text numberOfLines={1} style={styles.sectionTitle}>{item.title}</Text>
                     </View>
                    </View>
                </TouchableOpacity>

            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;    
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height:110,
    marginTop:0,
    backgroundColor:Colors.lightGray,
  },
  content: {
    marginLeft: 10,
    marginTop:10,
    marginBottom:20,
    padding:5,
    height:90,
    width:90,
    backgroundColor:Colors.primary,

  },
  title:{
    textAlign:'center',
    paddingBottom:5,
    paddingLeft:20,
    fontSize: 12,
    fontWeight: '700',
    color:'#fff'
  },
  child: {
    padding:5,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    textAlign:'center',
    color:'#fff'

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '400',
  },  

  image: {
    width:100,
    height: 100
  },
});