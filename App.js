import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {Icon} from 'react-native-elements';

import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import ProductScreen from './src/screens/ProductScreen';
import FavorisScreen from './src/screens/FavorisScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    )

}
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarLabel:'Bienvenue !',
                        tabBarIcon: () => <Icon name="home" type="ionicons" size={32} />
                    }}

                />
                <Tab.Screen
                    name="Favoris"
                    component={FavorisScreen}
                    options={{
                        tabBarLabel:' Your Favorite Product!',
                        tabBarIcon: () => <Icon name="favorite" type="ionicons" size={32} />
                    }}
                />
                <Tab.Screen
                    name="Scan"
                    component={ScanScreen}
                    options={{
                        tabBarLabel:'Scan Your Product!',
                        tabBarIcon: () => <Icon name="barcode-scan" type="material-community" size={32} />
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
