import React, {useState, useEffect} from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';

import Color from '../../constants/color';
import Icon from '../molecules/icon';

const randomTime = () => {
    const hrs = Math.round(Math.random()*12);
    const mins = Math.round(Math.random()*60);
    const hFormat = hrs < 10 ? '0' : '';
    const mFormat = mins < 10 ? '0' : '';
    const amPm = hrs < 12 ? 'AM' : 'PM';
    return String(hFormat + hrs + ":"+ mFormat + mins + " " + amPm)
}

const RecievedMessages = props => {
    const currentChatNameRecieved = props.final;
    const [shortText, setShortText] = useState('')
    useEffect(() => {
        let fullName = props.currentChatNameRecieved;
        let shortText = '';
        if (fullName) {
            fullName = fullName.split(' ');
            if (fullName.length === 1) {
                shortText = fullName[0].charAt(0).toUpperCase();
            } else if (fullName.length > 1) {
                shortText = fullName[0].charAt(0).toUpperCase() + fullName[1].charAt(0).toUpperCase();
            }
            setShortText(shortText);
        } else {
            setShortText('X')
        }

    }, [])
    return(
        <View style={styles.recieverContainer} >
            <View style={styles.recieverIcon} >
                <Text style={styles.recieverIconTextInside} >{shortText}</Text>
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
