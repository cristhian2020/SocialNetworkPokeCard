import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function TabScreenSearch() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab [Home|Settings]</Text>
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
