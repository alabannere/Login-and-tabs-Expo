import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform, AsyncStorage } from 'react-native';
import { Feather } from '@expo/vector-icons';
import API from '../../components/Api';
import {Button, Input, InputCode, Spinner} from '../../components/AppComponents';
import {setStorage} from '../../components/Functions';
import AuthContext from "../../contexts/AuthContext"

import Colors from '../../constants/Colors';

export default function Login(props) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRefresh, setIsRefresh] = React.useState(false);

  const [LOGGED_IN, setLOGGED_IN] = React.useState(false);
  const { isLogin } = React.useContext(AuthContext);
  isLogin({LOGGED_IN});

Init = async () => {
  var Login = await AsyncStorage.getItem('Login');
}


Login = async () => {
  setIsRefresh(true);
  if(username && password){
    API.Login(username, password).then((res) => {
        if(res.isLogin === 'true'){
          setStorage('isLogin', toString(true));
          setStorage('UID', res.user_id );    
          setLOGGED_IN(true);
        }else{
          setStorage('isLogin','');
          setStorage('UID', '');    
          setIsRefresh(false);
          setLOGGED_IN(false);
          alert(res.msg);
        }
    }).catch((error)=>{ 
        setIsRefresh(false);
        alert(error)
    }); 
  }else{
    alert('Complete los datos requeridos')
  }
}

Init();

return (

  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <SafeAreaView style={styles.container}>
  <View style={{ flex : .1}} />
  <Spinner isLoading={isRefresh}/>


  <View style={{ flex : 1}} >
    <View style={styles.logoContent}>
      <Image source={require('../../assets/images/logo_mini.png')} style={{width:160, height:120}} />
    </View>
  <View style={styles.forms}>
          <Input label="Usuario" round
            onChangeText={setUsername}
            value={username}
            placeholderTextColor="black" icon="user" iconColor="black" textColor="black" borderBottomColor="black"/>
                      

          <Input label="Contraseña" round
            onChangeText={setPassword} 
            value={password}
            placeholderTextColor="black" icon="lock" iconColor="black" textColor="black" borderBottomColor="black" password={true} />
           
           <View style={{width:'100%', height:'20%'}} />
    </View>
    <View style={{padding:25}} >
        <Button title="INGRESAR"  onPress={()=>Login()} bg={Colors.primary} />
    </View>
  </View>


    </SafeAreaView>
    </TouchableWithoutFeedback>
    <TouchableOpacity style={{alignItems:'center' , padding:20, position:'absolute', bottom:0, left:0, right:0}}  
      onPress={()=>props.navigation.navigate('Register')} >
        <Text>Registrarme</Text>
    </TouchableOpacity>
    </KeyboardAvoidingView>


  );
}


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
