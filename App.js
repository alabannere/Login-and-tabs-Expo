import * as React from 'react';
import { AsyncStorage, StatusBar, Platform,  Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//SCREENS
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LoginScreen  from './screens/Auth/Login';
import RegisterScreen  from './screens/Auth/Register';
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
  
  const [state] = React.useReducer({
          isLoading: false
        });

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLogin');
      if (value) {
        setLOGGED_IN(value)
      }
    } catch (error) {

    }
  };

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
    _retrieveData();

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
              <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
              <Stack.Screen name="Register" options={{headerShown: true}} component={RegisterScreen} />
            </Stack.Navigator>
          )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
}

