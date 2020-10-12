import React from 'react';
import { StyleSheet, Text, FlatList, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    
    function handleNavigationToHome(){
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/getnet.png')}/>
            <Text style={styles.flow}>Detalhamento de Outubro/2020</Text>
            <View style={styles.details}>
                <View style={styles.detailsItem}>
                    <Text style={styles.detailsTextHead}>Vendas</Text>
                    <Text style={styles.detailsTextBody}>50</Text>
                </View>
                <View style={styles.detailsItemGreen}>
                    <Text style={styles.detailsTextHead}>Recebido</Text>
                    <Text style={styles.detailsTextBody}>R$ 500,00</Text>
                </View>
            </View>
            <View style={styles.detailsMonth}>
                <Text style={styles.detailsTextHeadMonth}>Primeira semana</Text>
                <Text style={styles.detailsTextHeadMonth}>R$ 200,00</Text>
            </View>
            <View style={styles.head}>
                <Text style={styles.textHead}>Data</Text>
                <Text  style={styles.textHead}>Forma</Text>
                <Text  style={styles.textHead}>Bandeira</Text>
                <Text  style={styles.textHead}>Status</Text>
                <Text  style={styles.textHead}>Valor</Text>
            </View>    
            <TouchableOpacity style={styles.itemBody} onPress={()=>{}}>
                <View style={styles.body}>
                    <Text style={styles.textBody}>20/10</Text>
                    <Text  style={styles.textBody}>Crédito</Text>
                    <Text  style={styles.textBody}>
                        <Image  source={require('../../assets/images/elo.png')}/>
                    </Text>
                    <Text  style={styles.textBody}>Aprovado</Text>
                    <Text  style={styles.textBody}>R$ 100,00</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBody} onPress={()=>{}}>
                <View style={styles.body}>
                    <Text style={styles.textBody}>20/10</Text>
                    <Text  style={styles.textBody}>Crédito</Text>
                    <Text  style={styles.textBody}>
                        <Image  source={require('../../assets/images/elo.png')}/>
                    </Text>
                    <Text  style={styles.textBody}>Aprovado</Text>
                    <Text  style={styles.textBody}>R$ 100,00</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBody} onPress={()=>{}}>
                <View style={styles.body}>
                    <Text style={styles.textBody}>20/10</Text>
                    <Text  style={styles.textBody}>Crédito</Text>
                    <Text  style={styles.textBody}>
                        <Image  source={require('../../assets/images/elo.png')}/>
                    </Text>
                    <Text  style={styles.textBody}>Aprovado</Text>
                    <Text  style={styles.textBody}>R$ 100,00</Text>
                </View> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBody} onPress={()=>{}}>
                <View style={styles.body}>
                    <Text style={styles.textBody}>20/10</Text>
                    <Text  style={styles.textBody}>Crédito</Text>
                    <Text  style={styles.textBody}>
                        <Image  source={require('../../assets/images/elo.png')}/>
                    </Text>
                    <Text  style={styles.textBody}>Aprovado</Text>
                    <Text  style={styles.textBody}>R$ 100,00</Text>
                </View> 
            </TouchableOpacity>
            <View style={styles.hr}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    image: {
        marginTop: 80,
    },
    flow:{
        fontFamily: 'Rubik_700Bold',
        fontSize: 18,
        marginTop: 40
    },
    details: {
        flexDirection: 'row',
        marginTop: 10,
    },
    detailsItem: {
        borderColor: 'black',
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginHorizontal: 8
    } ,
    detailsItemBlue: {
        borderColor: '#004085',
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginHorizontal: 8
    } ,
    detailsItemGreen: {
        borderColor: '#5BBD75',
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginHorizontal: 8
    } ,
    detailsTextHead: {

    },
    detailsTextBody: {
        fontFamily: 'Rubik_700Bold'
    },
    detailsMonth: {
        flexDirection: 'row',
        paddingVertical: 15,
        marginTop: 16,
        backgroundColor: '#5BBD75',
        width: 350,
        justifyContent: 'space-between',
        paddingHorizontal: 8
    },
    detailsTextHeadMonth:{
        color: 'white'
    },   
    text: {
        alignSelf: 'center',
        color: '#EF0505',
        color: 'white',
        fontFamily: 'Rubik_500Medium'
    },
    hr: {
        width: 200,
        height: 6,
        marginTop: 100,
        backgroundColor: 'red',
        borderRadius: 40
    },
    head:{
        flexDirection: 'row',
        marginHorizontal: 40
    },
    textHead: {
        margin: 10,
        fontFamily: 'Rubik_500Medium',
    },
    list: {
        width: 350,
        padding: 40,
        backgroundColor: 'red'
    },
    body:{
        flexDirection: 'row',
    },
    textBody: {
        fontFamily: 'Rubik_300Light',
        fontSize: 12,
        marginHorizontal: 12,
    },
    itemBody: {
        marginBottom: 15,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 6,        
        shadowColor: "#000",
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    }
});

export default Home;