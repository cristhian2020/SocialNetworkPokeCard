import Header from '@/components/Header';
import ImageCarrousel from '@/components/ImageCarrousel';
import { View, Text, StyleSheet,  } from 'react-native';

export default function TabScreenHome() {
  return (
    <View style={styles.container}>
      <Header title="PokeMarket" showIcon={true}/>
      <ImageCarrousel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
