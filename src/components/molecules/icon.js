import React,{useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

import Color from '../../constants/color';

const Icon = props => {
    const [shortText, setShortText] = useState('')
    useEffect(() => {
        let fullName = props.fullname;
        console.log(fullName);
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

    return (
        <TouchableOpacity>
            <View style={styles.iconContainer} >
                <View style={styles.icon} >
                    <Text style={styles.iconTextInside} >{shortText}</Text>
                </View>
                <View >
                    <Text numberOfLines={1} style={styles.iconTextUnder}  >{props.fullname}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems:'center',
        marginTop:20,
        marginRight:17, 
    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: Color.accent,
        borderRadius: 30
    },
    iconTextInside: {
        fontSize: 25,
        textAlign:'center',
        marginTop:10,
        color:Color.primary
    },
    iconTextUnder:{
        marginTop:10,
        marginBottom:10,
        fontSize:20,
        color:Color.accent,
        width:100
    }
})

export default Icon;


