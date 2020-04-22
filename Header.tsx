import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Component } from 'react';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.text}>App IMC</Text>
    </View>
) 

export default Header;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignSelf:"center",
        backgroundColor:"#8A2BE2",
        padding:20,
    },
    text:{
        color:"#FFFAFA",
        textAlign:"center",
        fontSize:20,
    },
});