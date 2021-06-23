import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import SubHeading from '../components/atoms/SubHeading';
import Icon from '../components/molecules/icon';
import Color from '../constants/color';

const Dashboard = () => {
    const users = useSelector(state => state.user.availableUsers);
    return (
        <SafeAreaView style={styles.safeAreaViewcontainer}>
                <SubHeading title='Favourite Contacts' />
                <FlatList
                    horizontal
                    data={users}
                    keyExtractor={item => item.userid}
                    renderItem={itemData => (
                        <Icon
                            textOnIcon={itemData.item.usershortname}
                            fullname={itemData.item.username}
                        />
                    )
                    }
                />
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
    }
})

export default Dashboard;