import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface HeaderProps {
  title: string;
  showIcon?:boolean;
}

const Header = ({ title, showIcon }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      {showIcon && (
        <Pressable onPress={() => console.log('Pressed!')}>
          <MaterialIcons style={styles.search} name='search' size={30} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#f8f8f8',
   alignItems: 'center',
    justifyContent: 'center', // Centra el contenido
    flexDirection: 'row', // Coloca los elementos en fila horizontal
    paddingHorizontal: 20,  // Añade padding a los lados
  },
  headerText: {
 fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Ocupa todo el espacio disponible
    textAlign: 'center', // Centra el texto
  },
  search:{
     color: '#333', // Color del ícono
    position: 'absolute', // Posición absoluta
    right: 20, // Fijo a la derecha
    top: -15,
  }
});

export default Header;
