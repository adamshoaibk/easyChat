import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import SubHeading from '../components/atoms/SubHeading';
// import IconAndName from '../components/molecules/IconAndName';
import Color from '../constants/color';
import Icon from '../components/atoms/icon';
import IconAndName from '../components/molecules/iconAndName';

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
        flex: 1,
    },
    container: {
        // flex: 1,
        backgroundColor: 'yellow'
    }
})

export default Dashboard;