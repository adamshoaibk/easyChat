import React,{useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

import Color from '../../constants/color';
import { getShortName } from '../../utils/helper';

const Icon = props => {
    const [shortText, setShortText] = useState('')
    useEffect(() => {
        setShortText(getShortName(props.fullname))
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


