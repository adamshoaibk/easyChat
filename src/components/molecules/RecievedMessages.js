import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

import Color from '../../constants/color';
import { getShortName, randomTime } from '../../utils/helper';

const RecievedMessages = props => {
    console.log("inside chat screen",props.currentChatNameRecieved)
    return(
        <View style={styles.recieverContainer} >
            <View style={styles.recieverIcon} >
                <Text style={styles.recieverIconTextInside} >{getShortName(props.currentChatNameRecieved)}</Text>
            </View>
            {/* <Icon style={styles.rI} /> */}
            <View style={styles.recieverSubContainer} >
            <View>
                <Text style={styles.messageTime} >{randomTime()}</Text>
            </View>            
            <View style={styles.recieverTextContainer} >
                <Text>{props.chatMsg}</Text>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    recieverContainer:{
        flexDirection:'row',
        marginTop:40
    },
    recieverSubContainer:{
        flexDirection:'column'
    },
    recieverIcon:{
        backgroundColor:Color.primary,
        width:60,
        height:60,
        borderRadius:30,
        marginTop:18
    },
    recieverIconTextInside:{
        fontSize:20,
        fontWeight:'bold',
        color:Color.accent,
        textAlign:'center',
        marginTop:15
    },
    recieverTextContainer:{
        backgroundColor:'#d5dfed',
        marginLeft:10,
        padding:18,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20
    },
    messageTime:{
        marginLeft:12,
        marginBottom:10
    }
})

export default RecievedMessages;
