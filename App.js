import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';



export default function App() {
  return (
        <Routes/>
  );
}

/*

<View style={styles.container}>
      <Text>Ola mundo</Text>
      <StatusBar style="auto" />
    </View>



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
