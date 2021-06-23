import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Color from '../../constants/color';

const Icon = props => {
    
    return(
        <View style={styles.iconContainer} >
            <View style={styles.iconUnderText} >
            <View style={styles.icon} >
                <Text style={styles.iconTextInside} >{props.textOnIcon}</Text>
            </View>
                <Text>{props.fullname}</Text> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconUnderText:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:"#465bb3"
    },
    icon:{
        width:80,
        height:80,
        backgroundColor:Color.accent,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40
    },
    iconTextInside:{
        fontSize:40
    }
})

export default Icon;


