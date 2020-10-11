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
        padding: 20,
        borderRadius: 6,
        marginTop: 120,
        color: '#20232a',
        width: 360, 
        borderWidth: 1,
        borderColor: '#EF0505',
    },
    text: {
        alignSelf: 'center',
        color: '#EF0505'
    },
    textOr:{
        marginVertical: 20,
        color: '#aaa'
    },
    textRegister: {
        textDecorationLine: "underline",
        color: 'black'
    }
})

export default Login;