import React from 'react'
import { View, Text, FlatList, StyleSheet ,Button} from 'react-native';


export default function ListCarros({route,navigation}) {

    const { carros } = route.params;
    
  return (
    <View>
      <Button title="VOLTAR" onPress={()=> navigation.navigate('Home')}/>
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dados Salvos:</Text>
      <FlatList
        data={carros}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>Modelo: {item.modelo}</Text>
            <Text>Marca: {item.marca}</Text>
            <Text>Ano: {item.ano}</Text>
            <Text>Placa: {item.placa}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    </View>
    
  )
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