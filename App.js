import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './consts/colors';
import DetailsScreen from './screens/DetailsScreen';
import BottomNavigator from './navigation/BottomNavigator';
import OnBoardScreen from './screens/OnBoardScreen';
import DrinkScreen from './screens/DrinkScreen';
import SandwichScreen from './screens/SandwichScreen';
import SpecialScreen from './screens/SpecialScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="DrinkScreen" component={DrinkScreen} />
        <Stack.Screen name="Sandwish" component={SandwichScreen} />
        <Stack.Screen name="SpecialScreen" component={SpecialScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
