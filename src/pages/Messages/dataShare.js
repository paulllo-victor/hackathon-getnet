import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageStart = () => {
    const navigation = useNavigation();
    
    function handleNavigationToNext(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.barTop}></View>
            <Image style={styles.image} source={require('../../assets/images/getnet.png')}/>
            <View style={styles.containerCenter}>
                <Image style={styles.imageIcon} source={require('../../assets/images/historic.png')}/>
                <Text style={styles.message}>Eu aceito compartilhar minhas transações financeiras com a getnet  e com Santander?
                </Text>
            </View>
            <View style={styles.duoButton}>
            <TouchableOpacity style={styles.btnNegar} onPress={handleNavigationToNext}>
                <Text style={styles.text}>NEGAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationToNext}>
                <Text style={styles.text}>AUTORIZAR</Text>
            </TouchableOpacity>
            </View>
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
        padding: 20,
        borderRadius: 25,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 160, 
        borderWidth: 1,
        borderColor: '#EF0505',
        marginTop: 260,
        marginHorizontal: 6,
    },
    btnNegar:{
        padding: 20,
        borderRadius: 25,
        color: '#ccc',
        backgroundColor: '#ccc',
        width: 160, 
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 260,
        marginHorizontal: 6,
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
    duoButton:{
        flexDirection: 'row'
    }
}); 

export default MessageStart;