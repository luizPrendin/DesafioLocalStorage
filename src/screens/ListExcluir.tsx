import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ListExcluir({ route,navigation }) {
  const { carros, setCarros } = route.params;

  const [carrosTemp, setCarrosTemp] = useState(carros);
  
  const handleDelete = async (index) => {
    const novosCarros = carrosTemp.filter((_, ind) => ind !== index);
    setCarrosTemp(novosCarros);
    setCarros(novosCarros); // Atualiza o estado em Home.js
    await AsyncStorage.setItem("CARROS", JSON.stringify(novosCarros));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dados Salvos:</Text>
      <FlatList
        data={carrosTemp}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text>Modelo: {item.modelo}</Text>
            <Text>Marca: {item.marca}</Text>
            <Text>Ano: {item.ano}</Text>
            <Text>Placa: {item.placa}</Text>
            <Button title="Excluir" onPress={() => handleDelete(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});