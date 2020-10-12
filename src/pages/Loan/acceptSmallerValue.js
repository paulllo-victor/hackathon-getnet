import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageStart = () => {
    const navigation = useNavigation();
    
    function handleNavigationGetCred(){
        navigation.navigate('Accept');
    }
    function handleNavigationCred(){
        navigation.navigate('Loan');
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
            <Image style={styles.image} source={require('../../assets/images/getcred.png')}/>
            <View style={styles.containerCenter}>
                <Text style={styles.message}> 
                Parabéns,</Text>
                <Text style={styles.message}> 
                seu emprestimo foi APROVADO!!!</Text>
                <Image style={styles.imageIcon} source={require('../../assets/images/accept.png')}/>
                <Text style={styles.messageSubtitle}>  Você solicitou um empréstimo no valor de </Text>
                <Text style={styles.message}> R$7.000,00</Text>
                <Text></Text>
                <Text style={styles.messageSubtitle}>Infelizmente esse valor não está autorizado nesse momento.</Text>
                <Text></Text>
                <Text style={styles.messageSubtitle}> 
                Conseguimos liberar um empréstimo</Text>
                <Text style={styles.message}> R$ 5.000,00</Text>
            </View>
            <View style={styles.duoButton}>
                <TouchableOpacity style={styles.btnNegar} onPress={handleNavigationCred}>
                    <Text style={styles.text}>NEGAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationGetCred}>
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
        padding: 20,
        borderRadius: 25,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 160, 
        borderWidth: 1,
        borderColor: '#EF0505',
        marginTop: 90,
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
        marginTop:  90,
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