import React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/core/store';

//PAGES:BEGIN
import ConfigPage from './src/views/ConfigPage';
import LoginPage from './src/views/LoginPage';
import MainPage from './src/views/MainPage';
import NotePage from './src/views/NotePage';
import NotesPage from './src/views/NotesPage';
//PAGES:END


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
<Provider store={store}>
<NavigationContainer>
    <Stack.Navigator initialRouteName='MainPage'>
      <Stack.Screen
      name="MainPage"
      component={MainPage}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="ConfigPage"
      component={ConfigPage}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="NotesPage"
      component={NotesPage}
      options={{headerShown: false}}
      />
      <Stack.Screen
      name="NotePage"
      component={NotePage}
      options={{headerShown: false}}
      />
    </Stack.Navigator>
   </NavigationContainer>
</Provider>



  );
}

export default App;
