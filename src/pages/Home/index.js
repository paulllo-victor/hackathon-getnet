import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, FlatList, View, Image,TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../servers/api';

const Home = () => {
    const navigation = useNavigation();   

    function handleNavigationToHome(sale){
        navigation.navigate('FlowDetails', {sale});
    }
    function handleNavigationToLoan(){
        navigation.navigate('Loan');
    }

    const [sales,setSales] = useState([]);

    async function listSales(){
        const list = await Api.get('amount');
        setSales(list.data);
       
    }

    useEffect(()=>{
        listSales();
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/getcred.png')}/>
            <Text style={styles.flow}>Fluxo de venda</Text>
            <View style={styles.head}>
                <Text style={styles.textHead}>Mês/Ano</Text>
                <Text  style={styles.textHead}>Vendas</Text>
                <Text  style={styles.textHead}>Recebido</Text>
            </View> 
            <View style={styles.listSales} 
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}>
                <FlatList 
                    data={sales}
                    style={styles.listSales}
                    showsVerticalScrollIndicator={false}
                    onEndReached={listSales}
                    onEndReachedThreshold={0.2}
                    keyExtractor={sale => Date.now()}
                    renderItem={({item:sale})=>(     
                        <View>
                        <TouchableOpacity style={styles.itemBody} key={Date.now()} onPress={()=>handleNavigationToHome(sale)}>
                            <View style={styles.body}>
                                <Text style={styles.textBody}>{sale._id.month}/{sale._id.year}</Text>
                                <Text  style={styles.textBody}>{sale.count}</Text>
                                <Text  style={styles.textBody}>R$ {sale.total}</Text>
                            </View> 
                        </TouchableOpacity>
                        </View>    
                    )}
                    />
            </View>
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