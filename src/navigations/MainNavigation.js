import {StyleSheet, StatusBar, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Borrow from '../screens/Borrow';
import Login from '../screens/Login/Login';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar backgroundColor="#F5F5F7" barStyle="dark-content" />
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
          initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen
            name="Borrow"
            options={{headerShown: false}}
            component={Borrow}
          />
        </Stack.Navigator>
      </View>
    </>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
