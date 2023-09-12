import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const UserProfileScreen = ({ navigation }) => {
  // Supondo que você tenha os dados do usuário, como nome, e-mail e imagem do perfil
  const userData = {
    name: 'John Doe', // Nome do usuário
    email: 'fulano123@gmail.com', // E-mail do usuário
    profileImage: require('./assets/userknow.png'), // Imagem do perfil
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={userData.profileImage} style={styles.profileImage} />
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userEmail}>{userData.email}</Text>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: 375,
    height: 812,
    position: 'relative',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    borderRadius: 40,
    overflow: 'hidden',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: 24, // 24px da esquerda
    bottom: -100, // 586px da parte inferior
    borderRadius: 300,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#969595',
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    color: 'black',
    marginTop: 16,
    left: 20,
    bottom: -110,
  },
  userEmail: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#969595',
    marginTop: 8,
    left: 20,
    bottom: -100,
  },
  logoutButton: {
    width: 200,
    height: 48,
    left: 85,
    bottom: -250,
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
});

export default UserProfileScreen;
