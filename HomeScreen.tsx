import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

// Defina o caminho da imagem em uma constante
const backgroundImage = require('./assets/background.png');

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Container Superior com Imagem de Fundo */}
      <ImageBackground
        source={backgroundImage}
        style={styles.upperContainer}
      >
        <Text style={styles.header}>Plantinhas</Text>
      </ImageBackground>

      {/* Container Inferior com Botões de Acesso */}
      <View style={styles.lowerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 376, // Largura desejada
    height: 442, // Altura desejada
    top: -4, // Posição vertical desejada
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#418B64',
    marginBottom: 20,
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    backgroundColor: '#418B64',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 325,
    height: 48,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
