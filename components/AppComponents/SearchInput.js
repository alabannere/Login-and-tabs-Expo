import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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
      <View style={styles.content}>

        <View style={{marginRight:5}} >
          <Feather name="search" size={14} color="#888"  />
        </View>

        <View style={{flex:1}}>
          <TextInput style={styles.input} 
            autoFocus={prop.autoFocus}
            editable = {prop.editable}
            autoCorrect={false} 
            placeholder={prop.placeholder}
            placeholderTextColor={prop.phColor ? prop.phColor : '#888'}
            underlineColorAndroid='transparent'
            onTouchStart={prop.onPress}
            value={prop.value}
            onChangeText={prop.onChangeText }
            blurOnSubmit={prop.blurOnSubmit }
            onSubmitEditing={prop.onSubmitEditing}
            style={{fontSize:13, color:'#666'}}

          />
        </View>
        {prop.value && prop.clear ?
          <View style={{ backgroundColor:'#999', borderRadius:20}}>
          <TouchableOpacity onPress={prop.onPressClear} >
            <Feather name="x" size={14} color="#fff"  />
          </TouchableOpacity>
          </View>

          :null
        }

      </View>
    )
}
}


const styles = StyleSheet.create({
  input:{ 
    flex:1,
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