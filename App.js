import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './components/FirstPage';
import CitizenLogin from './components/CitizenLogin'
import AdminDashboard from './components/AdminDashboard';

const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage}/>
        <Stack.Screen name="CitizenLogin" component={CitizenLogin}/>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

