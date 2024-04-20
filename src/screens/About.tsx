import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre os Desenvolvedores</Text>
      <View style={styles.memberContainer}>
        <Text style={styles.memberName}>Tomaz Pecoraro</Text>
        <Text style={[styles.memberDesc, styles.border]}>Desenvolvedor responsável pela criação de design e cores do app</Text>
        <Text style={styles.memberName}>Luiz Felipe</Text>
        <Text style={[styles.memberDesc, styles.border]}>Desenvolvedor responsável pela criação da lógica e parte do funcionamento do app</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  memberContainer: {
    alignItems: 'center',
  },
  memberName: {
    fontSize: 18,
    marginBottom: 5,
  },
  memberDesc: {
    marginBottom: 10,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 15,
    borderRadius:7
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
