import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from './../../constants/Colors';

export default class Badge extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    var prop = this.props;

    return (
      <View style={styles.content}>
        <Text style={styles.title}>
        {prop.title}
        </Text>
      </View>
    )
}
}


const styles = StyleSheet.create({
  content: {
      backgroundColor:'red', 
      borderRadius:10, 
      paddingVertical:2, 
      paddingHorizontal:4, 
      position:"absolute", 
      top:-6, 
      right:+4
  },
  title: {
      fontSize:10, 
      fontWeight:'bold', 
      color:'white'
  },
});