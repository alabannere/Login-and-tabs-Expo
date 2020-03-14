import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import API from '../../components/Api';

const { width } = Dimensions.get('window');
const height = width * 0.7 -10;

export default class Slider extends React.Component {
  scrollX = new Animated.Value(0) // this will be the scroll location of our ScrollView


  removeHtmlTag(data){ 
    //Elimina los tags HTML de la descripcion
    const regex = /(<([^>]+)>)/ig;
    return data.replace(regex, '');
  }

  render() {
      const { images } = this.props;
      var onPress = this.props.onPress;

      let position = Animated.divide(this.scrollX, width);

    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
            )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
            scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call            
          >
            {images.map(image => (
              <View key={image.image} style={styles.imageContent} >
                <Image style={styles.image} source={{uri: image.image}} />
              </View>
            ))}

          </ScrollView>

          <View style={{ alignItems:'center' }}  >

          <View style={{ flexDirection: 'row' }}  >
          {images.map((_, i) => { // the _ just means we won't use that parameter
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
              outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
              // inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index
              // outputRange: [0.3, 1, 1, 1, 0.3], // is when the opacity changes from 1 to 0.3
              extrapolate: 'clamp' // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
            });
            return (
              <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                style={{ opacity, height: 10, width: 10, backgroundColor: '#fff', margin: 8, borderRadius: 0, height:5 }}
              />
            );
          })}
        </View>
        </View>

        </View>
      );
    }
    console.log('Please provide images');
    return null;    
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: (height-30) ,
  },
  imageContent: {
    width:(width-20),
    marginHorizontal:10,
    height:200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width:(width-20),
    height:200,
  },

});