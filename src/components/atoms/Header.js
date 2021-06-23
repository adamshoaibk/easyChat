import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Color from '../../constants/color';

const Header = props => {
    return(
        <View>
            <Text style={styles.text}>{props.label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontFamily: "Cochin",
        fontSize:30,
        fontWeight:'bold',
        color: 'white',
        backgroundColor:Color.primary,
        padding:10
    }
})

export default Header;