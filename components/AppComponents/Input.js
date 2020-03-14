import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from './../../constants/Colors';
import { Feather } from '@expo/vector-icons';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };    
}

handleFocus = () => this.setState({ isFocused: true });
handleBlur = () => this.setState({ isFocused: false });




  render() {
    const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: !isFocused ? 0 : 0,
      top: !isFocused ? 0 : 0,
      fontSize: !isFocused ? 15: 15,
      fontWeight:'600',
      color: !isFocused ? '#213247' : '#ccc',
    };


    var prop = this.props;
    var state = this.state;

    return (
      <View style={[styles.content, {  marginBottom: 20, height:50,  width: prop.width ? prop.width : 'auto', borderRadius: prop.round ? 5 :0,
        backgroundColor: prop.bg ? prop.bg : '#fff', 
        borderColor: prop.borderColor ? prop.borderColor : "white"
      }]}  >
      { prop.icon ?
        <View style={{ marginRight:8}} >
          <Feather  name={prop.icon} size={18} color={prop.iconColor ? prop.iconColor : "black"}  />
        </View>
        : null
      }





        <View style={{flex:1}}>
        { prop.label ?
          <Text style={labelStyle} >
            {this.props.value ? '' : label}
          </Text>
          : null
        }
          <TextInput 
          style={[styles.input, {color:prop.textColor ? prop.textColor:"black", fontWeight:'700' }]} 
          {...props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoCorrect={false} 
          autoFocus={this.props.autoFocus ? true : false}
          autoCapitalize={this.props.autoCapitalize ? this.props.autoCapitalize : 'none'}
          underlineColorAndroid='transparent'
          secureTextEntry={this.props.password}
          onChangeText={this.props.onChangeText}
          />
        </View>

      </View>
    )
}
}


const styles = StyleSheet.create({
  input:{ 
    flex:1,
    height: 40, 
  
  },
  content: {
    backgroundColor:"white",
    padding:15, 
    borderWidth: 1,
    flexDirection:'row',   
  },

});