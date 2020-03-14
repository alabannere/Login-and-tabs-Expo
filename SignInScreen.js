import * as React from 'react';
import AuthContext from "./contexts/AuthContext"
import { View, TextInput, Button } from 'react-native';



export default function SignInScreen({ navigation }) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [LOGGED_IN, setLOGGED_IN] = React.useState(false);
  const { isLogin } = React.useContext(AuthContext);
  isLogin({LOGGED_IN});

   signIn = () =>{
    setLOGGED_IN(true)
   }

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesion" onPress={() => signIn()} />

    </View>
  );
}