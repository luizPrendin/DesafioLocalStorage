import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'

import Home from '../screens/Home';
import ListCarros from '../screens/ListCarros';
import ListExcluir from '../screens/ListExcluir';


const {Screen,Navigator} = createBottomTabNavigator();

export function TabRotas(){

    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor:'green'
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon:()=> <MaterialIcons
                    name="home" size={30}/>
                }}

            />
            <Screen
            name='ListCarros'
            component={ListCarros}
            options={{
                tabBarIcon: ()=> <MaterialIcons name="list" size={30}/>
            }}
            
            />
            <Screen
            name='ListExcluir'
            component={ListExcluir}
            options={{
                tabBarIcon: ()=> <MaterialIcons name="delete" size={30}/>
            }}
            
            />
            
        </Navigator>
    )
}