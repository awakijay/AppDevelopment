import React from 'react'

import { View} from 'react-native';
import SimpleUI from './assets/SimpleUI';
import Welcome from './assets/Welcome';
import Awaki from './assets/awaki';
import Awaki2 from './assets/awaki2';
import Project from './assets/project';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

    

         
         
//const Stack = createNativeStackNavigator();


function App() {
  return (
    <Project/>
   /* <NavigationContainer>
      <Stack.Navigator>
        { <Stack.Screen name="page1" component={Awaki} />
        <Stack.Screen name="page2" component={SimpleUI} />
        <Stack.Screen name="page3" component={Welcome} />
        <Stack.Screen name="page4" component={Awaki2} /> */
    //     <Stack.Screen name="page5" component={Project} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )};
  export default App;