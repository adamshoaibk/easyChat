import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import RecievedMessages from '../molecules/RecievedMessages';
import SentMessages from '../molecules/SentMessages';
import Input from '../molecules/input';
import Color from '../../constants/color';

const ChatBox = props => {
    const messages = useSelector(state=> state.message.availableMessages);
    console.log("inside chatbox", props.currentPerson)
    return( 
        <View style={styles.ChatBoxContainer} >
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={messages}
                keyExtractor={item=> item.msgId}
                renderItem={itemData=>(
                    <View>
                        <RecievedMessages currentChatNameRecieved={props.currentPerson} chatMsg={itemData.item.message} />
                        <SentMessages chatMsg={itemData.item.message} />
                    </View>
                )}
            />
            <Input />
        </View>
    );
}

const styles = StyleSheet.create({
    ChatBoxContainer:{
        overflow:'hidden',
        backgroundColor:Color.accent,
        flex:1,
        justifyContent:'space-between',
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        marginTop:50,
        width:390
    }
})

export default ChatBox;