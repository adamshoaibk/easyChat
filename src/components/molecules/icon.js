import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from '../../constants/color';

const Icon = props => {
    return (
        <View style={styles.iconContainer} >
            <View style={styles.icon} >
                <Text style={styles.iconTextInside} >{props.textOnIcon}</Text>
            </View>
            <View>
                <Text style={styles.iconTextUnder} >{props.fullname}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems:'center',
        marginTop:20,
        marginRight:17
    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: Color.accent,
        borderRadius: 30
    },
    iconTextInside: {
        fontSize: 25,
        textAlign:'center',
        marginTop:10,
        color:Color.primary
    },
    iconTextUnder:{
        marginTop:10,
        fontSize:20,
        color:Color.accent
    }
})

export default Icon;


