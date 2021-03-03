import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native'
import AppNavigator from './src/AppNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView />
        <AppNavigator />
      </View>
    </NavigationContainer>
  )
}

export default App