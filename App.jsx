import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homs from './Screens/Login';
import About from './Screens/Signup';
import Index from './Screens/HomePage';
import Hotel from './Screens/Hote';
import { store,persistor } from './components/redux/store';
import { Provider } from 'react-redux';
import cart from './Screens/Cart';
import { PersistGate } from 'redux-persist/integration/react';
import Profile from './Screens/Profile';




const Stack = createNativeStackNavigator();

const commonScreenOptions = {
  headerShown: false,
  headerStyle: {},
  contentStyle: {
    marginTop: 35, 
  },
};

export default function App() {
 
  return (
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={commonScreenOptions}>
        <Stack.Screen name="login" component={Homs} />
        <Stack.Screen name="signUp" component={About} />
        <Stack.Screen name="main" component={Index} />
        <Stack.Screen name="hotel" component={Hotel} />
        <Stack.Screen name="cart" component={cart} />
        <Stack.Screen name="profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}
