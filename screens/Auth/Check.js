import * as React from 'react'
import { Text, ActivityIndicator, View, AsyncStorage} from 'react-native'
import {setStorage} from '../../components/Functions';
import API from '../../components/Api';
import {Spinner} from '../../components/AppComponents';
import Colors from '../../constants/Colors';

export default class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          error: false,
          isRefresh:false
        }
        this._isMounted = false;
    }
    static navigationOptions = { header: null };

    async componentDidMount() { 
      //this.logOut()
      this.setState({ isRefresh: true});
      this._isMounted = true;
      if(this._isMounted){
        var isLogin = await AsyncStorage.getItem('isLogin');
        this.UID = await AsyncStorage.getItem('UID');

        if(isLogin &&  this.UID ){
          console.log( this.UID );
            
          API.profile(this.UID ).then((res) => {
            console.log(res);
            setStorage('PROFILE', JSON.stringify(res[0]));    
            this.props.navigation.navigate('Main');
          }).catch((error)=>{ 
            this.setState({ isRefresh: false});
            console.log(error);
            alert(error)
          }); 



        }else{
          this.setState({ isRefresh: false});
          this.props.navigation.navigate('Login');
        }
      }
    }
    logOut(){
      this.setState({ isRefresh: true});
      setStorage('isLogin', '');
      setStorage('UID', '');
      setStorage('PROFILE', '');      
      this.setState({ isRefresh: false});
      this.props.navigation.navigate('Check');  
    }


    render(){
      return (
        <View style={{flex:1, backgroundColor:Colors.primary}} >
          <Spinner isLoading={this.state.isRefresh}/>
        </View>                   
      )
    }
}

