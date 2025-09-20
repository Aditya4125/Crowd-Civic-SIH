import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './components/FirstPage';
import CitizenLogin from './components/CitizenLogin'
import AdminDashboard from './components/AdminDashboard';
import CivicReport from './components/CivicReport';

const Stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options={{title:"Voice Unlocked",headerTitleAlign:"center"}}/>
        <Stack.Screen name="CitizenLogin" component={CitizenLogin} options={{title:"Voice Unlocked",headerTitleAlign:"center"}}/>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{title:"Voice Unlocked",headerTitleAlign:"center"}}/>
        <Stack.Screen name="CivicReport" component={CivicReport} options={{title:"Civic Report", headerTitleAlign:"center"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

