
import React ,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './components/Landing/index'
import Login from './components/Login/index'
import  Register  from './components/Register/index';
import { AuthProvider } from "./Context/Context";

const Stack = createNativeStackNavigator();

const App=() => {
  
 
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="landing" component={LandingScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>

  );
};



export default App;
