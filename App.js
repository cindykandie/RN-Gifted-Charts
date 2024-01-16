import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LineGraph from './components/LineGraph';
import Piechart from './components/PieChart';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Graphs and Charts</Text>
      <StatusBar style="auto" />
      <LineGraph />
      <Piechart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
