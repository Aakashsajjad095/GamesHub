import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Colors
} from "../../res/style/colors"

import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import gameHome from '../screens/home/gamesHome/gameHome';
import playGame from '../screens/home/playGame/playGame';



const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.teacherBackground
  },
};


function StackRoute({ navigation }) {
  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator  >
        <Stack.Screen
          name="gameHome"
          component={gameHome}
          options={{
            headerShown: false,
            title: 'Instant Home', //Set Header Title.
          }}
        />
         <Stack.Screen
          name="playGame"
          component={playGame}
          options={{
            headerShown: false,
            title: 'Play Game', //Set Header Title.
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default StackRoute;