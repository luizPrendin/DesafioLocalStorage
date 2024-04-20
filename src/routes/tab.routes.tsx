import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import About from '../screens/About';
import ListCarros from '../screens/ListCarros';
import ListExcluir from '../screens/ListExcluir';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRotas() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'transparent', // Torna as guias visualmente transparentes
        tabBarShowLabel: false, // Esconde os rótulos das guias
        tabBarStyle: { borderTopWidth: 0 }, // Remove a linha superior da barra de navegação
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name='ListCarros'
        component={ListCarros}
        options={{
          tabBarIcon: null, // Não exibe ícone
        }}
      />
      <Screen
        name='ListExcluir'
        component={ListExcluir}
        options={{
          tabBarIcon: null, // Não exibe ícone
        }}
      />
      <Screen
        name='About'
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
    
  );
}
