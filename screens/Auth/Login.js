import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform, AsyncStorage } from 'react-native';
import { Feather } from '@expo/vector-icons';
import API from '../../components/Api';
import {Button, Input, InputCode, Spinner} from '../../components/AppComponents';
import {setStorage} from '../../components/Functions';

import Colors from '../../constants/Colors';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeKeyboardActive:true,
      isRefresh:false,
      isLogin:[],
      isAuth:false,
      code:'',
      db_host:'',
      db_name:'',
      msg:'',
      email:'',
      password:''
    }
  }


async componentDidMount() {
  var Login = await AsyncStorage.getItem('Login');
  var userType = await AsyncStorage.getItem('userType');
  var UID = await AsyncStorage.getItem('UID');



}
pressCode = async (key) => {
  if(this.state.code.length > 7){
    this.Auth();
  }else{
    this.setState({code:this.state.code + key});
  }
}


Login = async () => {
  this.setState({ isRefresh: true});

  if(this.state.email && this.state.password){
    API.Login(this.state.email, this.state.password).then((res) => {

        if(res.isLogin === 'true'){

          setStorage('isLogin', toString(true));
          setStorage('UID', res.user_id );    


        }else{
          setStorage('isLogin','');
          setStorage('userType', '');     
          setStorage('UID', '');     
          this.setState({ isRefresh: false});
          this.setState({ msg: res.msg});
          alert(res.msg);
        }
       
      }).catch((error)=>{ 
      this.setState({ isRefresh: false});
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
  <View style={{ flex : .1}} />
  <Spinner isLoading={this.state.isRefresh}/>


  <View style={{ flex : 1}} >
    <View style={styles.logoContent}>
      <Image source={require('../../assets/images/logo_mini.png')} style={{width:160, height:120}} />
    </View>
  <View style={styles.forms}>
          <Input label="Usuario" round
            onChangeText={(text) => { this.setState({email: text}) }}
            value={this.state.email}
            placeholderTextColor="black" icon="user" iconColor="black" textColor="black" borderBottomColor="black"/>
                      

          <Input label="Contraseña" round
            onChangeText={(text) => { this.setState({password: text}) }} value={this.state.password}
            placeholderTextColor="black" icon="lock" iconColor="black" textColor="black" borderBottomColor="black" password={true} />
           
           <View style={{width:'100%', height:'20%'}} />
    </View>
    <View style={{padding:25}} >
        <Button title="INGRESAR"  onPress={()=>this.Login()} bg={Colors.primary} />
    </View>
  </View>


    </SafeAreaView>
    </TouchableWithoutFeedback>
    <TouchableOpacity style={{alignItems:'center' , padding:20, position:'absolute', bottom:0, left:0, right:0}}  
      onPress={()=>this.props.navigation.navigate('Register')} >
        <Text>Registrarme</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>


  );
}
};

Login.navigationOptions = {
  title: ' ',
  headerTitleStyle:{fontSize:15, color: Colors.headerTint},
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.primary,
  },
  forms:{    
    flex: .5,
    paddingHorizontal: 25,
  },
  formsCenter:{    
    alignItems:'center',
  },
  logoContent:{
    flex: .3,
    marginBottom: 48,
    alignItems:'center',
    justifyContent: 'center',
  },
  selets:{
    flexDirection:'row',
  },
  contentButton: {
    backgroundColor: '#eee',
    borderRadius:50,
    margin:15,
    height:50,
    width:50,
    textAlign:'center',
    alignItems:'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  contentButtonText: {
    backgroundColor: '#eee',
    margin:8,
    width:30,
    textAlign:'center',
    alignItems:'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },  
  buttonText: {
    textAlign:'center',
    fontSize: 28,
    fontWeight: '700',
    color:'#444'
  },
  buttonTextText: {
    textAlign:'center',
    fontSize: 20,
    fontWeight: '700',
  },  
});
