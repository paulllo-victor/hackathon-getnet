import React from 'react';
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const GetNet = () => {
    const navigation = useNavigation();
    
    function handleNavigationToStart(){
        navigation.navigate('MessageStart');
    }

    return (
        <View>
            <View style={styles.containerHead}>
                <View style={styles.containerDemo}>
                    <Image style={styles.imgDemo} source={require('../../assets/images/arrows.png')}/>
                    <View>
                        <Text style={styles.textDemo}>Demonstração</Text>
                        <Text style={styles.textDemo}>1212121221</Text>
                    </View>
                </View>
                <View style={styles.containerIconHeader}>
                    <SimpleLineIcons name="user" size={24} color="black" />
                </View>
            </View>
            
            <View style={styles.container}>
                <View style={styles.order}>
                    <Text>Meus pedidos</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="red" />
                </View>
            </View>

            <View style={styles.w100}>
                <Text style={styles.textW100}>Quero pedir</Text>
            </View>
            <TouchableOpacity style={styles.btnItemList}>
                <MaterialCommunityIcons name="file-document-box-outline" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>Mais bobinas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItemList}>
                <MaterialCommunityIcons name="clipboard-alert-outline" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>Kit Sinalização</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItemList}>
                <AntDesign name="tool" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>Manutenção de equipamento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItemList}>
                <Fontisto name="shopping-pos-machine" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>Equipamento adicional</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItemList}>
                <Fontisto name="key" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>Token de ativação</Text>
            </TouchableOpacity>

            <View style={styles.w100}>
                <Text style={styles.textW100}>Quero contratar</Text>
            </View>
            <TouchableOpacity style={styles.btnItemList}>
                <Foundation name="graph-trend" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>GetData</Text>
            </TouchableOpacity>
            <View style={styles.w100}>
                <Text style={styles.textW100}>Financeiro</Text>
            </View>
            <TouchableOpacity style={styles.btnItemList}>
                <FontAwesome5 name="coins" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>GetPay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItemList}>
            <MaterialCommunityIcons name="coin" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>Anticipe Hoje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItemList}>
                <MaterialCommunityIcons name="calculator" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>Calcular uma venda</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnItemList} onPress={handleNavigationToStart}>
                <MaterialIcons name="attach-money" size={24} color="#5a5c5a" />
                <Text style={styles.textBtnItem}>GetCred</Text>
            </TouchableOpacity>

            <View style={styles.menuGlobal}>
                <View style={styles.itemMenuGlobal}>
                    <MaterialIcons name="credit-card" size={24} color="#ddd" />
                    <Text style={styles.textW100}>Venda</Text>
                </View>
                <View style={styles.itemMenuGlobal}>
                    <MaterialIcons name="room-service" size={24} color="#FF0505" />
                    <Text style={styles.textW100Active}>Serviços</Text>
                </View>
                <View style={styles.itemMenuGlobal}>
                    <MaterialIcons name="store" size={24} color="#ddd" />
                    <Text style={styles.textW100}>Negócio</Text>
                </View>
                <View style={styles.itemMenuGlobal}>
                    <Foundation name="graph-bar" size={24} color="#ddd" />
                    <Text style={styles.textW100}>Análise</Text>
                </View>
                <View style={styles.itemMenuGlobal}>
                    <Feather name="help-circle" size={24} color="#ddd" />
                    <Text style={styles.textW100}>Ajuda</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10
    },
    containerHead:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    containerDemo: {
        flexDirection: 'row',
    },
    textDemo:{
        fontSize: 12,
        marginHorizontal:8,
        fontWeight: '200'
    },
    imgDemo:{
        marginTop: 8
    },
    containerIconHeader:{
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius:50,
        backgroundColor: '#ddd'
    },
    order:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginTop:10
    },
    w100:{
        paddingVertical: 10,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 10
    },
    textW100:{
        fontWeight: '100',
        color: '#aaa',
        fontSize: 13
    },
    textW100Active:{
        fontWeight: '100',
        color: '#FF0505',
        fontSize: 13
    },
    btnItemList:{
        flexDirection: 'row',
        paddingHorizontal:10,
        paddingVertical: 10
    },
    textBtnItem:{
        color:'#5a5c5a',
        marginHorizontal: 10
    },
    menuGlobal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop:30
    },
    itemMenuGlobal:{
        alignItems: 'center'
    }
});

export default GetNet;