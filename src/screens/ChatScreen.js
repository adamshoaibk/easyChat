import React from 'react';
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';

import Color from '../constants/color';
import ChatBox from '../components/organisms/chatBox';

const ChatScreen = props =>{
    const currentChatName = props.navigation.getParam('personName')
    return(
        <SafeAreaView style={styles.SafeAreaViewContainer}>
            <ChatBox currentPerson={currentChatName} />
        </SafeAreaView>
    );
}
ChatScreen.navigationOptions = navData => {
    return{
        headerTitle:navData.navigation.getParam('personName'),
        headerStyle:{
            backgroundColor:Color.primary,
            height:60
        },
        headerTintColor:Color.accent,
        headerTitleStyle:{
            fontWeight:'bold',
            fontSize:20,
            paddingLeft:50
        }
    };
}

const styles = StyleSheet.create({
    SafeAreaViewContainer:{
        backgroundColor:Color.primary,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default ChatScreen;