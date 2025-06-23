import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function TabScreenCreate() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tcreate</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
