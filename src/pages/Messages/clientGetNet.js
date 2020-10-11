import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageStart = () => {
    const navigation = useNavigation();
    
    function handleNavigationToNext(){
        navigation.navigate('MessageClientGetNet');
    }

    return (
        <View style={styles.container}>
            <View style={styles.barTop}></View>
            <Image style={styles.image} source={require('../../assets/images/getnet.png')}/>
            <View style={styles.containerCenter}>
                <Image style={styles.imageIcon} source={require('../../assets/images/historic.png')}/>
                <Text style={styles.message}>Cliente getnet? 
                </Text>
                <Text style={styles.message}> 
                Não cliente getnet?</Text>
            </View>
            <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationToNext}>
                <Text style={styles.text}>ACESSO AO EMPRÉSTIMO</Text>
            </TouchableOpacity>
            <View style={styles.hr}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    containerCenter:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
    },  
    barTop:{
        width: 1000,
        height: 70,
        backgroundColor: '#EF0505',
    },  
    image: {
        marginTop: 50,
    },
    imageIcon:{
        marginBottom: 20,    
    },
    message:{
        fontFamily: 'Rubik_700Bold',
        textAlign: 'center'
    },
    btnEnter: {
        padding: 15,
        borderRadius: 40,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 360, 
        borderWidth: 1,
        borderColor: '#EF0505',
        marginTop: 260
    },
    hr: {
        width: 200,
        height: 6,
        marginTop: 20,
        backgroundColor: 'red',
        borderRadius: 40
    },
    text: {
        alignSelf: 'center',
        color: '#EF0505',
        color: 'white',
        fontFamily: 'Rubik_500Medium'
    },
}); 

export default MessageStart;