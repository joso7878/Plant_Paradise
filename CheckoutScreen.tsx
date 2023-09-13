import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const CheckoutScreen = () => {
  const items = [
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      price: '$29.99',
      imageUri: 'https://gardenerspath.com/wp-content/uploads/2021/01/Fiddle-Leaf-Fig-Plant-in-a-Small-Pot.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Succulent Collection',
      price: '$19.99',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_sWaGZCFE2Jy45L3-QcjJaOd3tYrE-T9YHg&usqp=CAU',
      quantity: 2,
    },
    {
      id: 5,
      name: 'Lavender',
      price: '$14.99',
      imageUri: 'https://www.bhg.com/thmb/n1DGrFWiF5E3ktp3u6k3YcixXOg=/1280x0/filters:no_upscale():strip_icc()/bettys-blue-english-lavender-54fb2268-cc05a8a06b71424bbf689f066c0b91b7.jpg',
      quantity: 1,
    },
    {
      id: 7,
      name: 'Aloe Vera',
      price: '$12.99',
      imageUri: 'https://cdn.awsli.com.br/2500x2500/2446/2446161/produto/167472313/20230817_091329-fotor-20230817154849-e3fynodfe6.jpg',
      quantity: 1,
    },
    {
      id: 9,
      name: 'Spider Plant',
      price: '$18.99',
      imageUri: 'https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg',
      quantity: 1,
    },
  ];

  // Função para calcular o valor total com base nos itens do carrinho
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += parseFloat(item.price.replace('$', '')) * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} />
        <Text style={styles.headerText}>Cart</Text>
        <TouchableOpacity style={styles.cartIcon} />
      </View>

      <ScrollView style={styles.itemList}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{ uri: item.imageUri }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Elemento para mostrar o total dos itens */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>
      
      {/* Botão de checkout */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 40,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    overflow: 'hidden',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    paddingBottom: 8,
  },
  backButton: {
    width: 0.39,
    height: 0.39,
    transform: [{ rotate: '180deg' }],
    transformOrigin: '0 0',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    textAlign: 'left',
    flex: 1, // Para alinhar o texto ao centro
  },
  itemList: {
    flex: 1,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECF8F3',
    borderRadius: 8,
    backgroundColor: '#ECF8F3',
    marginBottom: 16,
    width: '100%',
    paddingHorizontal: 8,
  },
  itemImage: {
    width: 91,
    height: 73,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    lineHeight: 16,
  },
  itemPrice: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    lineHeight: 14,
    marginTop: 4,
  },
  itemQuantity: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 16,
    marginTop: 4,
  },
  totalContainer: {
    width: 324,
    height: 30,
    backgroundColor: '#ECF8F3',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#418B64',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  totalText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
  },
  checkoutButton: {
    width: 327,
    height: 48,
    backgroundColor: '#418B64',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
  },
  cartIcon: {
    width: 30,
    height: 30,
    borderRadius: 9999,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 10,
    // Adicione o ícone do carrinho aqui como uma imagem ou ícone do React Native
  },
});

export default CheckoutScreen;
