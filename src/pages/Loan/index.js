import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput, CheckBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageStart = () => {
    const [isSelected, setSelection] = useState(false);

    const navigation = useNavigation();
    
    function handleNavigationToAnalyze(){
        navigation.navigate('Loading');
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
                Informe as datas do seu histórico de pagamento</Text>
            </View>
            <TextInput style={styles.inputText} placeholder="DATA DE INÍCIO"/>
            <TextInput style={styles.inputText} placeholder="DATA DE FINAL"/>
            <TextInput style={styles.inputText} placeholder="VALOR DO EMPRÉSTIMO"/>
            <View style={styles.containerCheckbox}>
                <CheckBox style={styles.checkbox} value={isSelected} onValueChange={setSelection}/>
                <Text style={styles.textTerms}>Eu li e concordo com os termos de uso da getCred
 </Text>
            </View>
            <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationToAnalyze}>
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
        marginBottom: 20,    
    },
    message:{
        fontFamily: 'Rubik_700Bold',
        textAlign: 'center',
        paddingHorizontal: 10
    },
    containerCheckbox: {
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 35
    },  
    textTerms :{
        color: '#aaa'
    },
    inputText: {
        width: 350,
        borderRadius: 6,
        backgroundColor: 'white',
        color: '#20232a',
        padding: 15,
        marginTop: 20,
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
        marginTop: 140
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