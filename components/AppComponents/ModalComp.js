import React from 'react';
import {Modal, Image, Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity } from 'react-native';

export default class ModalComp extends React.Component {
  constructor(props) {
    super(props);

}



  render() {


    
    var props = this.props;


    return(
    <Modal visible={props.isVisible}  transparent={true} animationType="slide" style={styles.modal} >
     <View style={styles.container}>

     <View style={styles.header}>
      <View style={{flex:2}} >
        <Text style={styles.title} >{props.title}</Text> 
      </View>  
  
      <View style={{flex:.2, alignContent:'flex-end'}} >
        {props.headerRight}
      </View>        
     </View>     

     <View style={styles.content}>
      {props.content}
     </View>
     </View>
 
   </Modal>


    )
  }
}

const styles = StyleSheet.create({
    modal:{
      position: 'absolute', 
      top:0, 
      bottom:0, 
      right:0, 
      left:0,
    },
    container:{
      backgroundColor:'#fff', 
      margin:20,
      marginTop:80,
      padding:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,      
    },    
    content:{
      backgroundColor:'#fff', 
    },
    header:{
      backgroundColor:'#fff', 
      flexDirection:'row', 
      alignContent:'space-between'
    },
    title:{
      fontSize:15,
      fontWeight:'700',
    }
  });