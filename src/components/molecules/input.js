import React from 'react';
import {
    View, 
    TextInput, 
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
const Input = () => {
    return(
        <View style={styles.inputcontainer} >
            <TextInput 
                placeholder="type your message here"
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
        paddingVertical:10
    }
})

export default Input;