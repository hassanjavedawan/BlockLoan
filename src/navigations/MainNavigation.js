import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import Auth from '../screens/Auth/Auth';
import Gallery from '../screens/Gallery/Gallery';


const MainNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <>
         <View style={styles.container}>
         <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#39D98A',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            initialRouteName='Login'
            >
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}
              component={Login}
            />
            
            <Stack.Screen
              name="Auth"
              options={{headerShown: false}}
              component={Auth}
            />
            <Stack.Screen
              name="Gallery"
              options={{headerShown: false}}
              component={Gallery}
            />
          </Stack.Navigator>
         </View>
    </>
  )
}

export default MainNavigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      },
})