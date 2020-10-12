import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, FlatList, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Api from '../../servers/api';

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const sale = route.params.sale;
    
    function handleNavigationToHome(){
        navigation.navigate('Home');
    }

    const [sales,setSales] = useState([]);

    async function listSales(){
        try {
            const m =  `${sale._id.year}-${sale._id.month}`;
        const response = await Api.get(`sales?month=${m}`).then(response => setSales(
                response.data
        ));
        
        console.log(sales)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        listSales();
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/getcred.png')}/>
            <Text style={styles.flow}>Detalhamento de  {sale._id.month}/{sale._id.year}</Text>
            <View style={styles.details}>
                <View style={styles.detailsItem}>
                    <Text style={styles.detailsTextHead}>Vendas</Text>
                    <Text style={styles.detailsTextBody}>{sale.count}</Text>
                </View>
                <View style={styles.detailsItemGreen}>
                    <Text style={styles.detailsTextHead}>Recebido</Text>
                    <Text style={styles.detailsTextBody}>R$ {sale.total}</Text>
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
            <FlatList
                  data={sales}
                  showsVerticalScrollIndicator={false}
                  onEndReached={listSales}
                  onEndReachedThreshold={0.2}
                  keyExtractor={s => String(s._id)}
                  renderItem={({item:s})=>(   
                <TouchableOpacity style={styles.itemBody} onPress={()=>{}} key={String(sale._id)}>
                    <View style={styles.body}>
                    <Text style={styles.textBody}>{s.month}</Text>
                    <Text  style={styles.textBody}>{s.payment}</Text>
                        <Text  style={styles.textBody}>
                            <Image  source={require('../../assets/images/elo.png')}/>
                        </Text>
                    <Text  style={styles.textBody}>{s.status}</Text>
                    <Text  style={styles.textBody}>R$ {s.value}</Text>
                    </View> 
                </TouchableOpacity>  
            )} 
            />  
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