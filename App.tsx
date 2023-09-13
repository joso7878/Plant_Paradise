import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

// Importe as telas que criamos
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import PerfileScreen from './PerfileScreen';
import FirstScreen from './HomeScreen';
import InitiaScreen from './InitialScreen';
import DetailsScreen from './DetailScreen';
import CartScreen from './CartScreen';
import CheckoutScreen from './CheckoutScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'SourceSans-Regular': require('./assets/fonts/SourceSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Coloque as telas da primeira pasta aqui */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Plantinhas' }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="InitialScreen" component={InitiaScreen} options={{ title: 'Initial' }} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
        <Stack.Screen name="CartScreen" component={CartScreen}/>
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>



        {/* Coloque as telas da segunda pasta aqui */}
        <Stack.Screen name="Perfile" component={PerfileScreen} options={{ title: 'Plantinhas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
