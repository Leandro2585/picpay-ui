import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton';

import HomeScreen from './pages/Home';
import PayScreen from './pages/Pay';
import WalletScreen from './pages/Wallet';
import { Settings } from 'react-native';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
}

export default function Navigation(){
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if(route.name === 'Pay'){
                        return(
                        <PayButton
                            onPress={() => navigation.navigate('Pay')}
                            focused={focused}/>
                    );
                    }
                    const  { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#282a36',
                    borderTopColor: 'rgba(255,255,255,0.2)'
                },
                activeTintColor: '#F8F8F2',
                inactiveTintColor: '#92929c'
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Inicio'
                }}/>
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    title: 'Carteira'
                }}/>
            <Tab.Screen
                name="Pay"
                component={PayScreen}
                options={{
                    title: '',
                }}/>
            <Tab.Screen
                name="Notifications"
                component={PayScreen}
                options={{
                    title: 'Notificações'
                }}/>
            <Tab.Screen
                name="Settings"
                component={PayScreen}
                options={{
                    title: 'Ajustes'
                }}/>
        </Tab.Navigator>
    );
}
