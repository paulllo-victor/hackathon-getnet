import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity, TextInput, CheckBox} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageStart = () => {
    const [isSelected, setSelection] = useState(false);

    const navigation = useNavigation();
    
    function handleNavigationToCongratulations(){
        navigation.navigate('Congratulations');
    }
    function handleNavigationToHome(){
        navigation.navigate('Home');
    }
    function handleNavigationToBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.barTop}></View>            
            {/* <TouchableOpacity style={styles.btnBack} onPress={handleNavigationToBack}>
                <Image style={styles.imageBack} source={require('../../assets/images/back.png')}/>
            </TouchableOpacity> */}
            <Image style={styles.image} source={require('../../assets/images/getnet.png')}/>
            <View style={styles.detailsCred}>
                <Text style={styles.detailsTextCred}>Empréstimo</Text>
                <Text style={styles.detailsTextCred}>R$ 5.000,00</Text>
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.message}> 
                Empréstimo com garantia</Text>
                <Text style={styles.message}> 
                nas suas transações</Text>
            </View>
            <TextInput style={styles.inputText} placeholder="CONTA"/>
            <TextInput style={styles.inputText} placeholder="AGÊNCIA"/>
            {/* <View style={styles.containerCheckbox}>
                <CheckBox style={styles.checkbox} value={isSelected} onValueChange={setSelection}/>
                <Text style={styles.textTerms}>Deseja ir descontando das suas transações futuras?
 </Text>
            </View> */}
            <View style={styles.duoButton}>
                <TouchableOpacity style={styles.btnNegar} onPress={handleNavigationToHome}>
                    <Text style={styles.text}>VOLTAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationToCongratulations}>
                    <Text style={styles.text}>CONTINUAR</Text>
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
        marginTop: 20
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
        textAlign: 'center'
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
        marginTop: 40,
        shadowColor: "#000",
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    duoButton:{
        flexDirection: 'row'
    },
    btnEnter: {
        padding: 20,
        borderRadius: 25,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 160, 
        borderWidth: 1,
        borderColor: '#EF0505',
        marginTop: 150,
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
        marginTop: 150,
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
    detailsCred: {
        marginTop: 20,
        borderColor: '#5BBD75',
        borderWidth: 4,
        padding: 20,
        borderRadius: 6,
        alignItems: 'center'
    },
    detailsTextCred: {
        fontFamily:'Rubik_500Medium',
        color: '#5BBD75'
    }
}); 

export default MessageStart;