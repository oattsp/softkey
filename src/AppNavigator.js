import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingScreen from './screens/SettingScreen'
import { connect } from 'react-redux'
import TabWaitQ from './screens/TabWaitQ'
import TabHoldQ from './screens/TabHoldQ'
import { APP_NAME, PRIMARY_COLOR } from './Constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const tabWaitQ = {
    tabBarLabel: 'Wait Q',
    tabBarIcon: ({ focused }) => {
        return (
            <Icon
                size={23}
                name="thumbtack"
                color={
                    focused
                        ? 'tomato'
                        : 'gray'
                }
            />
        )
    },
};

const tabHoldQ = {
    tabBarLabel: 'Hold Q',
    tabBarIcon: ({ focused }) => {
        return (
            <Icon
                size={23}
                name="layer-group"
                color={
                    focused
                        ? 'tomato'
                        : 'gray'
                }
            />
        )
    },
};

const tabTitleOption = ({route, navigation}) => ({
    title: APP_NAME,
    headerStyle: {
        backgroundColor: PRIMARY_COLOR,
    },
    headerTintColor: '#fff',
    headerBackTitle: ' ',
    headerLeft: null,
    headerRight: () => {
        return (
            <TouchableOpacity
                activeOpacity={0.1}
                onPress={() => navigation.navigate('Setting')}
                style={{ padding: 10 }}>
                <Icon
                    name="tools"
                    size={23}
                    color="#fff"
                />
            </TouchableOpacity>
        );
    },
})

const tabBarOption = {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    labelStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    labelPosition: "beside-icon"
}

let SettingContainer = connect(state => ({ config: state.configReducer }))(SettingScreen)
let TabWaitContainer = connect(state => ({ config: state.configReducer }))(TabWaitQ)
let TabHoldContainer = connect(state => ({ config: state.configReducer }))(TabHoldQ)

const TabScreens = (props) => {
    return (
        <Tab.Navigator initialRouteName="TabWaitQ" tabBarOptions={tabBarOption}>
            <Stack.Screen name="TabWaitQ" component={TabWaitContainer} options={tabWaitQ} />
            <Stack.Screen name="TabHoldQ" component={TabHoldContainer} options={tabHoldQ} />
        </Tab.Navigator>
    );
};

const RootStack = (props) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Setting" component={SettingContainer} />
            <Stack.Screen name="Home" component={TabScreens} options={tabTitleOption} />
        </Stack.Navigator>
    );
};

export default RootStack