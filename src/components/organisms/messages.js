import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';

import Color from '../../constants/color';
import { randomTime } from '../../utils/helper';

const Messages = props => {
    return(
            <TouchableOpacity 
                style={styles.container}
                onPress={props.goToChatScreen}
                >
                    <View style={styles.messagesIcon} >
                        <Text style={styles.messageIconInsideName} >{props.messageIconInsideName}</Text>
                    </View>
                    <View style={styles.userNameAndTextContainer} >
                        <Text style={styles.messageUsername} >{props.messageUsername}</Text>
                        <Text style={styles.messageText} >{props.messageText}</Text>
                    </View>
                    <Text style={styles.messageTime} >{randomTime()}</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    messageText:{
        width:200
    },
    container:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        marginTop:30
    },
    messagesIcon:{
        width: 60,
        height: 60,
        backgroundColor: Color.primary,
        borderRadius: 30
    },
    userNameAndTextContainer:{
        padding:15
    },
    messageIconInsideName:{
        fontSize: 25,
        textAlign:'center',
        marginTop:10,
        color:Color.accent
    },
    messageUsername:{
        fontWeight:'bold',
        fontSize:20
    },
    messageTime:{
        fontSize:18,
        fontWeight:'bold',
        flex:1,
        marginLeft:300,
        paddingBottom:50,
        position:'absolute'
    }
})

export default Messages;