import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ImageSourcePropType, ImageBackground } from 'react-native';
import { GlobalStyles } from "./constants/style";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
    const backgroundImage: ImageSourcePropType = require('../Plant_Paradise/assets/background.jpg');

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage}>
                <View style={styles.backgroundImage}/>
            </ImageBackground>

            <View style={styles.MainContainer}>
                <Text style={styles.Title}>
                    Plant{'\n'}Paradise
                </Text>
                <Text style={styles.SubTitle}>
                    Find your favorite plants and{'\n'}help the environment
                </Text>
                <View  style={styles.buttonSubContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.buttonContainer}>
                        <View>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '55%'
    },
    MainContainer: {
        flex: 1,
        padding: 25,
        gap: 16,
        backgroundColor: '#FFFFFF', // Alterado para a cor de fundo primária
    },
    Title: {
        fontSize: 50,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 60,
        letterSpacing: 0,
        textAlign: 'left',
        color: 'black', // Alterado para a cor primária
    },
    SubTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'left',
        color: '#969595', // Alterado para a cor secundária
    },
    buttonContainer: {
        width: '100%',
        height: 48,
        backgroundColor: '#418B64', // Alterado para a cor primária
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSubContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 16,
    },
    buttonText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF', // Alterado para a cor de fundo primária
        textAlign: 'center',
    },
});

export default LoginScreen;
