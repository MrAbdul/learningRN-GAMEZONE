import React from "react";
import { StyleSheet,View,Text } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <View >
                <Text style={styles.headerText}>Game Zone</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'red'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    }
})