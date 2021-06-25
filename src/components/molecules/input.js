import React from 'react';
import {
    View, 
    TextInput, 
    Button,
    StyleSheet
} from 'react-native';

import Color from '../../constants/color';

const Input = () => {
    return(
        <View style={styles.inputcontainer} >
            <TextInput 
                placeholder="enter your message"
                style={styles.input}
            />
            <View style={styles.button} >
                <Button 
                    title="s"
                    style={styles.sendButton}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputcontainer:{
        flexDirection:'row',
        backgroundColor:'#d5dfed',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginTop:40,
        marginLeft:30,
        marginRight:30,
        marginBottom:20
    },
    input:{
        fontSize:20,
        paddingHorizontal:40
    },
    button:{
        paddingHorizontal:25,
        paddingVertical:10
    }
})

export default Input;