import React,{useEffect} from 'react';
import {StyleSheet,View,Text,Button,Image} from 'react-native'
import { globalStyles } from './../styles/global';
import Card from './../shared/card';
import { images } from '../utils/helperFunctions';

export default function ReviewDetails(props){
    const navigation=props.navigation;
    const route = props.route
    const {title,rating,body}=route.params;
    // useEffect(()=>{
    //     navigation.drawer.setOptions({swipeEdgeWidth: 0} )
    // },[])
    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text >GameZone rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>

        </View>
    )


}

const styles = StyleSheet.create({
    container:{

    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})