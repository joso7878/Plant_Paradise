import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#969595"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#969595"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#969595"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => /* Coloque sua lógica de cadastro aqui */}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>Já tem uma conta? Faça login aqui.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Cor de fundo primária
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    color: '#418B64', // Cor primária
    marginBottom: 20,
  },
  input: {
    height: 48,
    backgroundColor: '#F6F6F6', // Cor de fundo secundária
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: '#333333', // Cor de texto principal
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#418B64', // Cor primária
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Cor de fundo primária
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  loginLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  loginText: {
    color: '#418B64', // Cor primária
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
});

export default RegistrationScreen;
