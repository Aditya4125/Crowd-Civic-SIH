import { StyleSheet, Text, View } from 'react-native';
import FirstPage from './components/FirstPage';

export default function App() {
  return (
    <FirstPage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
