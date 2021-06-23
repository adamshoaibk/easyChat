import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Color from '../../constants/color';

const SubHeading =  props => {
    return(
        <View>
            <Text style={styles.SubHeadingText} >{props.title} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    SubHeadingText:{
        fontFamily: "Cochin",
        fontSize:30,
        fontWeight:'bold',
        color: Color.accent,
        backgroundColor:Color.primary,
        padding:10
    }
})

export default SubHeading;