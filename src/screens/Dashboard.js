import React from 'react';
import { 
        StyleSheet, 
        FlatList, 
        SafeAreaView,
        View
    } from 'react-native';
import { useSelector } from 'react-redux';

import SubHeading from '../components/atoms/SubHeading';
import Icon from '../components/molecules/icon';
import Messages from '../components/organisms/messages';
import Color from '../constants/color';
import { getShortName } from '../utils/helper';

const Dashboard = props => {
    const users = useSelector(state => state.user.availableUsers);
    return(
            <SafeAreaView style={styles.safeAreaViewcontainer}>
                    <SubHeading title='Favourite Contacts' />
                    <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={users}
                        keyExtractor={item => item.userid}
                        renderItem={(itemData, index) => {
                            console.log("hellooo",itemData.item)
                            return(
                                <Icon
                                fullname={itemData.item.username}
                            />
                            );
                        }
                        }
                    />
                    </View>
                    <View style={styles.msgScreen} >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={users}
                            keyExtractor={item=> item.userid}
                            renderItem={itemData=>(
                                <Messages 
                                    messageIconInsideName={getShortName(itemData.item.username)}
                                    messageUsername={itemData.item.username}
                                    messageText={itemData.item.usermsg}
                                    goToChatScreen={()=>{
                                        props.navigation.navigate({
                                            routeName:'Chat',
                                            params:{
                                                personName:itemData.item.username
                                            }
                                        })
                                    }}
                                />
                            )}
                        />
                    </View>
            </SafeAreaView>
        );
}
Dashboard.navigationOptions = navbar => {
    return {
        headerTitle: "Inbox",
        headerStyle: {
            backgroundColor: Color.primary,
            height: 60
        },
        headerTintColor: Color.accent,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
        }
    }
}

const styles = StyleSheet.create({
    safeAreaViewcontainer: {
        backgroundColor:Color.primary
    },
    msgScreen:{
        overflow:'hidden',
        backgroundColor:Color.accent,
        borderTopRightRadius:60,
        borderTopLeftRadius:60
    }
})

export default Dashboard;