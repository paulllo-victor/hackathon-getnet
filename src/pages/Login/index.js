import React from 'react';
import { View, Text, Image,StyleSheet,TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {      
    const navigation = useNavigation();
    
    function handleNavigationToHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/getnet.png')}/>
            <TextInput style={styles.inputText} placeholder="CPF"/>
            <TextInput style={styles.inputText} placeholder="SENHA"/>
            <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationToHome}>
                <Text style={styles.text}>ENTRAR</Text>
            </TouchableOpacity>
            <Text style={styles.textOr}>ou</Text>
            <Text style={styles.textRegister}>Fazer cadastro</Text>
            <View style={styles.hr}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    image: {
        marginTop: 180,
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
        marginTop: 120,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 360, 
        borderWidth: 1,
        borderColor: '#EF0505',

    },
    text: {
        alignSelf: 'center',
        color: '#EF0505',
        color: 'white',
        fontFamily: 'Rubik_500Medium'
    },
    textOr:{
        marginVertical: 20,
        color: '#aaa'
    },
    textRegister: {
        textDecorationLine: "underline",
        color: 'black',
        color: '#aaa'
    },
    hr: {
        width: 200,
        height: 6,
        marginTop: 40,
        backgroundColor: 'red',
        borderRadius: 40
    }
})

export default Login;