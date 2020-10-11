import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import MessageStart from './pages/Messages';
import MessageClientGetNet from './pages/Messages/clientGetNet';
import dataShare from './pages/Messages/dataShare';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{cardStyle:{
                backgroundColor: 'white'
            }}}>
                {/* <AppStack.Screen name="Login" component={Login}/> */}
                {/* <AppStack.Screen name="Home" component={Home}/> */}
                {/* <AppStack.Screen name="MessageStart" component={MessageStart}/> */}
                {/* <AppStack.Screen name="MessageClientGetNet" component={MessageClientGetNet}/> */}
                <AppStack.Screen name="dataShare" component={dataShare}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;