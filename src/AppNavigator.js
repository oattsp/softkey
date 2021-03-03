import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from './screens/SettingScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

const RootStack = (props) => {
    return (
        <Stack.Navigator initialRouteName="Setting">
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default RootStack