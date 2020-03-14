import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import API from '../../components/Api';
import {Button, Input} from '../../components/AppComponents';
import Colors from '../../constants/Colors';
import {setStorage} from '../../components/Functions';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      lastName:'',
      email:'',
      password:''
    }
  }

  static navigationOptions = ({navigation}) => {
    const { params = {} } = navigation.state
  
    return {
        title: 'Registrarme',
    }
  }
componentDidMount() {

}
Register = async () => {
  if(this.state.email && this.state.password && this.state.email && this.state.password){
    API.Register(this.state.name, this.state.lastName, this.state.email, this.state.password).then((res) => {
      if(res){
        if(res.isLogin === "true"){
          setStorage('isLogin', toString(true));
          setStorage('UID', res.user_id);
          this.props.navigation.navigate('Main');
        }else{
          setStorage('isLogin','');
          setStorage('UID', '');        
          if(res.msg){
            this.setState({ msg: res.msg});
            alert(res.msg);
          }
        }
      }  
    }).catch((error)=>{
      alert(error)
    }); 
  }else{
    alert('Complete los datos requeridos')

  }

}
render() {
return (

  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <SafeAreaView style={styles.container}>



    <View style={styles.forms}>
          <Input label="Nombre" 
            onChangeText={(text) => { this.setState({name: text}) }} value={this.state.name}
            placeholderTextColor="black" icon="chevron-right" iconColor="black" textColor="black" borderBottomColor="black"/>
         
          <Input label="Apellido" 
            onChangeText={(text) => { this.setState({lastName: text}) }} value={this.state.lastName}          
            placeholderTextColor="black" icon="chevron-right"  iconColor="black" textColor="black" borderBottomColor="black"/>
         
          <Input label="Correo electronico" 
            onChangeText={(text) => { this.setState({email: text}) }} value={this.state.email}          
            placeholderTextColor="black" icon="chevron-right"  iconColor="black" textColor="black" borderBottomColor="black"/>

          <Input label="Contraseña" 
            onChangeText={(text) => { this.setState({password: text}) }} value={this.state.password}           
            placeholderTextColor="black" icon="chevron-right"  iconColor="black" textColor="black" borderBottomColor="black" password={true} />
          
            <View style={{width:'100%', height:30}} />

<Text style={{textAlign:'center', marginBottom:20}}>Al presionar "Registrarme" estoy aceptando los terminos y condiciones</Text>

          <Button title="REGISTRARME"  onPress={()=>this.Register()} bg={Colors.primary} />
    </View>
    <View style={{ flex : 1 }} />

    </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>


  );
}
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.lightGray,
  },
  forms:{
    padding: 24,
 
  },
  logoContent:{
    flex: 1,
    marginBottom: 48,
  }
});
