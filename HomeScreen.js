import * as React from 'react';
import AuthContext from "./contexts/AuthContext"
import { View, Text, Button } from 'react-native';



export default function HomeScreen({ navigation }) {

  const [LOGGED_IN, setLOGGED_IN] = React.useState(true);
  const { isLogin } = React.useContext(AuthContext);
  isLogin({LOGGED_IN});

  
   signOut = () =>{
    setLOGGED_IN(false)
   }
   
  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={() => signOut()} />

    </View>
  );
}