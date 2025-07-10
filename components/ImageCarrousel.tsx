import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get("window");

const images = [
  {
    id: 1,
    url: "https://relentlessdragon.com/wp-content/uploads/2019/10/Charizard-Legendary-Collection3.jpg",
    title: "Charizard ",
    subtitle:"Holography",
    backgroundColor: '#E8F4FD', // Azul claro como la carta
    borderColor: '#4A90E2'

  },
  {
    id: 2,
    url: "https://cardotaku.com/cdn/shop/files/IMG_2172.png?v=1689838413",
    title: "Mew",
    subtitle:"First Edition",
    backgroundColor: '#F0E6FF', // Púrpura claro
    borderColor: '#8B5CF6'
    
  },
  {
    id: 3,
    url: "https://i.ebayimg.com/images/g/p98AAOSw3JVl~F47/s-l1200.jpg",
    title: "Mewtwo", 
    subtitle:"Shiny Variant",
    backgroundColor: '#FFF4E6', // Dorado claro
    borderColor: '#F59E0B'
  },
];

const ImageCarrousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.feature}>Feature Cards</Text>
      <Carousel
        loop
        width={width * 0.85}
        height={width * 1.1}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        renderItem={({ item}) => (
          <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <View style={styles.typeIcon}>
                <Text style={styles.typeText}>⚡</Text>
              </View>
            </View>

            <View style={styles.imageContainer}>
              <Image source={{ uri: item.url }} style={styles.cardImage} />
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                <Text style={styles.price}> 230 $</Text>
                </View>

              </View>
            </View>

          </View>
          
        )}
      />
       
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#F5F5F5',
  },
  
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginHorizontal: 10,
    position: 'relative',
    padding: 15,
  },
  
  cardBorder: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
    borderWidth: 3,
    borderRadius: 15,
    pointerEvents: 'none',
  },
  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 1,
  },
  
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  
  typeIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
  },
  
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  
  cardFooter: {
    marginTop: 10,
    zIndex: 1,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#34495E',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  stat: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  

  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2C3E50',
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  feature:{
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  }
});



export default ImageCarrousel;
