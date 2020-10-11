import React from 'react';
import {View, Text,Image, StyleSheet} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

const GetNet = () => {
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
        backgroundColor: '#eee',
        paddingHorizontal: 10
    },
    textW100:{
        fontWeight: '100',
        color: '#aaa',
        fontSize: 13
    }
});

export default GetNet;