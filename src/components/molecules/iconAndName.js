import React from 'react';
import {View, StyleSheet} from 'react-native';

import Icon from '../atoms/icon';
import IconUnderName from '../atoms/iconUnderName';

const IconAndName = () =>{
    return(
        <View>
            <Icon textOnIcon='RS' />
            <IconUnderName fullname="Rashmi Shree S"/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default IconAndName;