import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from './../../constants/Colors';
import { Feather } from '@expo/vector-icons';

export default class InputCode extends React.Component {
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
      fontSize: !isFocused ? 30: 30,
      textAlign:'center',
      fontWeight:'600',
      color: !isFocused ? '#999' : '#eee',
    };


    var prop = this.props;
    var state = this.state;

    return (
      <View style={[styles.content, {  width: prop.width ? prop.width : 'auto',
        backgroundColor: prop.theme == 'dark' ? state.backgroundColorDark : state.backgroundColorLight, 
        borderBottomColor: prop.borderBottomColor ? prop.borderBottomColor : "white"
      }]}  >
      { prop.icon ?
        <View style={{ marginRight:8}} >
          <Feather  name={prop.icon} size={18} color={prop.iconColor ? prop.iconColor : "white"}  />
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
          style={[styles.input, {color:prop.textColor ? prop.textColor:"black", fontWeight:'700', fontSize:30 }]} 
          {...props}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoCorrect={false} 
          autoFocus={this.props.autoFocus ? true : false}
          autoCapitalize={true}
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
    textAlign: 'center'
  },
  content: {
    height:55,
    backgroundColor:"white",
    borderBottomWidth: 4,
    flexDirection:'row',
    margin:10,
   
  },

});