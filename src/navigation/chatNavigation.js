import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ChatScreen from '../screens/ChatScreen';
import DashboardScreen from '../screens/Dashboard';
import Color from '../constants/color';

const ChatNavigator = createStackNavigator({
    Dashboard:DashboardScreen,
    Chat:ChatScreen
});

export default createAppContainer(ChatNavigator);