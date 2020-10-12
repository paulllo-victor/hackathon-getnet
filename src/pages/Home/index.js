import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, FlatList, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../servers/api';

const Home = () => {
    const navigation = useNavigation();
    
    function handleNavigationToHome(){
        navigation.navigate('FlowDetails');
    }
    function handleNavigationToLoan(){
        navigation.navigate('Loan');
    }

    const [sales,setSales] = useState([]);

    async function listSales(){
        const list = await Api.get('sales');
        setSales(list.data);
    }

    useEffect(()=>{
        listSales();
    }, []) 

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/getcred.png')}/>
            <Text style={styles.flow}>Fluxo de venda</Text>
            <View style={styles.head}>
                <Text style={styles.textHead}>Mês</Text>
                <Text  style={styles.textHead}>Vendas</Text>
                <Text  style={styles.textHead}>Recebido</Text>
            </View> 
            <ScrollView style={styles.listSales} 
                showsVerticalScrollIndicator={false}
                onEndReached={listSales}
                onEndReachedThreshold={0.2}>
                <View>
                <FlatList 
                    data={sales}
                    renderItem={({item:sale})=> (                    
                        <TouchableOpacity style={styles.itemBody} onPress={handleNavigationToHome}>
                            <View style={styles.body}>
                                <Text style={styles.textBody}>{sale.date}</Text>
                                <Text  style={styles.textBody}>50</Text>
                                <Text  style={styles.textBody}>{sale.value}</Text>
                            </View> 
                        </TouchableOpacity>
                    )} 
                />
                </View>
            </ScrollView>
            <View style={styles.containerFixed}>
                <TouchableOpacity style={styles.btnEnter} onPress={handleNavigationToLoan}>
                    <Text style={styles.text}>ACESSO AO EMPRÉSTIMO</Text>
                </TouchableOpacity>
                <View style={styles.hr}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        position: 'relative'
    },
    image: {
        marginTop: 80,
    },
    flow:{
        fontFamily: 'Rubik_700Bold',
        fontSize: 18,
        marginTop: 40
    },
    text: {
        alignSelf: 'center',
        color: '#EF0505',
        color: 'white',
        fontFamily: 'Rubik_500Medium'
    },
    btnEnter: {
        padding: 15,
        borderRadius: 40,
        color: '#20232a',
        backgroundColor: '#EF0505',
        width: 360, 
        borderWidth: 1,
        borderColor: '#EF0505',
        // marginTop: 270,
        
    },
    containerFixed:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 40,
    },  
    hr: {
        width: 200,
        height: 6,
        marginTop: 40,
        backgroundColor: 'red',
        borderRadius: 40
    },
    listSales:{
        height: '70%'
    },  
    head:{
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 40
    },
    textHead: {
        margin: 18,
        marginHorizontal: 35,
        fontFamily: 'Rubik_700Bold',
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
        marginHorizontal: 40,
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