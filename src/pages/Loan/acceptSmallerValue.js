import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageStart = () => {
    const navigation = useNavigation();
    
    function handleNavigationGetCred(){
        navigation.navigate('GetCred');
    }
    function handleNavigationToBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.barTop}></View>            
            <TouchableOpacity style={styles.btnBack} onPress={handleNavigationToBack}>
                <Image style={styles.imageBack} source={require('../../assets/images/back.png')}/>
            </TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/images/getnet.png')}/>
            <View style={styles.containerCenter}>
                <Text style={styles.message}> 
                Parabéns,</Text>
                <Text style={styles.message}> 
                seu emprestimo foi APROVADO!!!</Text>
                <Image style={styles.imageIcon} source={require('../../assets/images/accept.png')}/>
                <Text style={styles.messageSubtitle}> 
                    Você pediu um emprestimo de R$ 5.000,00, infezlimente esse valor não está disponivel nesse momento.
                </Text>
                <Text></Text>
                <Text style={styles.messageSubtitle}> 
                Mas você conseguiu um emprestismo de </Text>
                <Text style={styles.message}> R$ 2.000,00</Text>
            </View>
            <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationGetCred}>
                <Text style={styles.text}>CONTINUAR</Text>
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
        marginTop: 50
    },
    btnBack: {        
        alignSelf: 'flex-start',
    },
    imageIcon: {
        marginTop: 400
    },  
    imageBack: {
        marginTop: 8,
        marginHorizontal: 8 
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
        marginTop: 60,    
        marginBottom: 50,    
    },
    message:{
        fontFamily: 'Rubik_700Bold',
        textAlign: 'center'
    },
    messageSubtitle: {
        fontFamily: 'Rubik_400Regular',
        textAlign: 'center',
        paddingHorizontal: 20
    },
    inputText: {
        width: 350,
        borderRadius: 6,
        backgroundColor: 'white',
        color: '#20232a',
        padding: 15,
        marginTop: 40,
        shadowColor: "#000",
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    btnEnter: {
        padding: 15,
        borderRadius: 40,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 360, 
        borderWidth: 1,
        borderColor: '#EF0505',
        marginTop: 150
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