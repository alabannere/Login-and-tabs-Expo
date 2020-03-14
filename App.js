import * as React from 'react';
import { AsyncStorage, StatusBar, Platform,  Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen  from './SignInScreen';
import HomeScreen  from './HomeScreen';

//SCREENS
import BottomTabNavigator from './navigation/BottomTabNavigator';
//import Login from './screens/Auth/Login';
//import Register from './screens/Auth/Register';
//SCREENS



import AuthContext from "./contexts/AuthContext"

const Stack = createStackNavigator();
import useLinking from './navigation/useLinking';



export default function App(props) {
  
  const [LOGGED_IN, setLOGGED_IN] = React.useState(false);

  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  
  const [state] = React.useReducer(
    {
      isLoading: false
    }
  );



  const authContext = React.useMemo(() => ({
      isLogin: async data => {
        setLOGGED_IN(data.LOGGED_IN)
      }
    }),[]
  );



    // Load any resources or data that we need prior to rendering the app
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        setInitialNavigationState(await getInitialState());

        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          { LOGGED_IN ? (
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} /> 
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="SignIn" options={{headerShown: false}} component={SignInScreen} />
            </Stack.Navigator>
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
}

