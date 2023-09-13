// Importe as bibliotecas do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Importe sua configuração do Firebase
import { firebaseConfig } from './ConfigFireBase';

// Inicialize o Firebase no início do seu aplicativo
const app = initializeApp(firebaseConfig);

const RegistrationScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);

      // Registro bem-sucedido
      // Você pode adicionar aqui qualquer outra lógica que desejar após o registro bem-sucedido, como navegar para outra tela
      console.log('Registro bem-sucedido!');
    } catch (error) {
      // Se ocorrer um erro durante o registro, você pode lidar com ele aqui
      console.error('Erro ao registrar:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.linkText}>Já tem uma conta? Faça login aqui.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // primary background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#418B64', // primary color
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#969595', // secondary color
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#418B64', // primary color
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
  },
  buttonText: {
    color: '#FFFFFF', // primary background
    fontSize: 18,
    textAlign: 'center',
  },
  linkText: {
    color: '#418B64', // primary color
    fontSize: 16,
  },
});

export default RegistrationScreen;
