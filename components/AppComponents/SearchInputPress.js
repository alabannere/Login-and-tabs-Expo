import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from './../../constants/Colors';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);

}

  render() {
    var prop = this.props;

    return (
      <TouchableOpacity style={styles.content} onPress={prop.onPress} >
        <View style={{marginRight:5}} >
          <Feather name="search" size={14} color="#888"  />
        </View>
        <View style={{flex:1}}>
          <Text style={styles.input}> 
            {prop.placeholder} 
          </Text>
        </View>
      </TouchableOpacity>
    )
}
}


const styles = StyleSheet.create({
  input:{ 
    flex:1,
    fontSize:13, 
    color:'#666'
  },
  content: {
    width:'100%', 
    backgroundColor: '#ededed', 
    paddingVertical:15, 
    paddingHorizontal:15, 
    borderRadius:15,
    flexDirection:'row',
    
  },
});