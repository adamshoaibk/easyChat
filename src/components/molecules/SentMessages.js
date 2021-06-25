import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Color from '../../constants/color';

const SentMessages = props =>{
    return(
        <View style={styles.sentMessageContainer} >
            <View style={styles.timeContainer} >
                <Text>Now</Text>
            </View>
            <View style={styles.sentMessageSubContainer} >
                <Text style={styles.sentMessage} >{props.chatMsg}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sentMessageContainer:{
        padding:20,
        marginTop:20
    },
    sentMessageSubContainer:{
        backgroundColor:Color.primary,
        padding:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20
    },
    timeContainer:{
        marginLeft:10,
        marginBottom:10
    },
    sentMessage:{
        color:Color.accent
    }
})

export default SentMessages;