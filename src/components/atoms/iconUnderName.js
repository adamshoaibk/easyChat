import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Color from '../../constants/color';

const IconUnderName = props => {
    return(
            <View style={styles.IconContainer}>
                <Text style={styles.iconUnderText}>{props.fullname}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    iconUnderText:{
        fontSize:20,
        fontFamily: "Cochin"
    }
})

export default IconUnderName;


