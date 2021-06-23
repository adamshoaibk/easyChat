import React from 'react';
import {View, StyleSheet,FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import SubHeading from '../components/atoms/SubHeading';
// import IconAndName from '../components/molecules/IconAndName';
import Color from '../constants/color';
import Icon from '../components/atoms/icon';
import IconAndName from '../components/molecules/iconAndName';

const Dashboard = () =>{
    const users = useSelector(state=>state.user.availableUsers);
    return(
        <View style={styles.container} >
            <SubHeading title='Favourite Contacts'/>
            <FlatList 
                data={users}
                keyExtractor={item => item.userid}
                renderItem={itemData =>(
                    <Icon 
                        textOnIcon={itemData.item.usershortname}
                        fullname={itemData.item.username}
                    />
                )
                }
            />
            
            {/* <IconAndName /> */}
        </View>
    );
}
Dashboard.navigationOptions = navbar => {
    return{
        headerTitle:"Inbox",
        headerStyle:{
            backgroundColor:Color.primary,
            height:60
        },
        headerTintColor:Color.accent,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30
          }
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1
    }
  })

export default Dashboard;