import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);

      // Login bem-sucedido
      // Você pode adicionar aqui qualquer outra lógica que desejar após o login bem-sucedido, como navegar para outra tela
      console.log('Login bem-sucedido!');
      navigation.navigate('InitialScreen');
    } catch (error) {
      // Se ocorrer um erro durante o login, você pode lidar com ele aqui
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.linkText}>Não tem uma conta? Crie uma aqui.</Text>
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

export default LoginScreen;
