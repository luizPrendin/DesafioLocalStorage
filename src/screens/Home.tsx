


import { View, Button,Text, TextInput, StyleSheet  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState,useEffect } from 'react';
import { Linking } from 'react-native';




export default function Home({navigation}) {
  
  

  const [modeloCarro, setModelo] = useState('')
  const[marcaCarro,setMarca] = useState('')
  const[anoCarro, setAno]= useState('')
  const[placaCarro, setPlaca] = useState('')
  const[listCarros,setListCarros]=useState([])
  

   async function buscarDados(){
    const c = await AsyncStorage.getItem("CARROS")
    setListCarros(JSON.parse(c))
  }

  useEffect(()=>{
    buscarDados()
  },[])


let car=[]
  async function savar() {
    let carros=[]
    if (await AsyncStorage.getItem("CARROS") != null){
      carros = JSON.parse(await AsyncStorage.getItem("CARROS"))
    }
    carros.push({modelo:modeloCarro,marca:marcaCarro,ano:anoCarro,placa:placaCarro})
    await AsyncStorage.setItem("CARROS",JSON.stringify(carros))
    alert("Carro salvo na lista com sucesso!")
    await buscarDados()
    car = carros
    setModelo('')
    setMarca('')
    setAno('')
    setPlaca('')
    
    // Passar os dados para a tela de destino
    
    //navigation.navigate('ListCarros', { carros });
    Linking.openURL('http://localhost:8081/')
    
    
  }

  return (
    <>
    
    
    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column',alignSelf:'center', gap:10 }}>
      <Text style={{alignSelf:'center'}}>
      ADICIONAR CARROS
      </Text>

      <Text style={styles.labelText}>
      MODELO:
      </Text>
      <TextInput
      placeholder='INFORME O MODELO DO CARRO'
      style={styles.input}
      value={modeloCarro}
      onChangeText={(value)=>setModelo(value)}      
      />
      <Text style={styles.labelText}>
      MARCA:
      </Text>
      <TextInput
      placeholder='INFORME A MARCA DO CARRO'
      style={styles.input}
      value={marcaCarro}
      onChangeText={(value)=>setMarca(value)}      
      />
      <Text style={styles.labelText}>
      ANO:
      </Text>
      <TextInput
      placeholder='INFORME O ANO DO CARRO'
      style={styles.input}
      value={anoCarro}
      onChangeText={(value)=>setAno(value)}      
      />
      <Text style={styles.labelText}>
      PLACA:
      </Text>
      <TextInput
      placeholder='INFORME A PLACA DO CARRO'
      style={styles.input}
      value={placaCarro}
      onChangeText={(value)=>setPlaca(value)}      
      />

      <Button title="ADICIONAR" onPress={savar} />
      <Button title="LISTAR" onPress={() =>  {buscarDados(),navigation.navigate('ListCarros',{carros: listCarros})} }/>
      <Button title="EXCLUIR" onPress={() =>{ navigation.navigate('ListExcluir', { carros: listCarros,setCarros: setListCarros})}} />
      <Button title="ABOUT" onPress={()=> navigation.navigate('About')}/>
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({

  input:{
    borderWidth:1,
    height:40,
    width:300,
    borderRadius:15,
    paddingStart:8,
    
  },
  labelText:{
    paddingStart:8
  }
})
