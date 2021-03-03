import React, { useEffect } from 'react'
import { TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { APP_NAME, PRIMARY_COLOR } from '../Constants'
import { Input } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'
import * as configActions from '../actions/config.action'

const SettingScreen = (props) => {

    const configReducer = useSelector(({configReducer}) => configReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        setNavigationOption()
    }, [])

    const setNavigationOption = () => {
        props.navigation.setOptions({
            title: APP_NAME,
            headerStyle: {
                backgroundColor: PRIMARY_COLOR,
            },
            headerTintColor: '#fff',
            headerBackTitle: ' ',
            headerRight: () => {
                return (
                    <TouchableOpacity
                        activeOpacity={0.1}
                        onPress={() => alert("Hey I'm Oat.")}
                        style={{ padding: 10 }}>
                        <Icon
                            name="save"
                            size={20}
                            color="#fff"
                        />
                    </TouchableOpacity>
                );
            },
        })
    }

    return (
        <ScrollView style={styles.container}>
            <Input
                label='IP Address'
                labelStyle={{marginTop: 10}}
                placeholder='IP ADDRESS'
                leftIcon={
                    <Icon
                        name='language'
                        size={24}
                        color={PRIMARY_COLOR}
                    />
                }
                value={configReducer.ip}
                onChangeText={(text)=>dispatch(configActions.addIp(text))}
            />
            <Input
                label='Port'
                placeholder='PORT'
                leftIcon={
                    <Icon
                        name='bolt'
                        size={24}
                        color={PRIMARY_COLOR}
                    />
                }
                value={configReducer.port}
                onChangeText={(text)=>dispatch(configActions.addPort(text))}
            />
            <Input
                label='Channel'
                placeholder='CHANNEL'
                leftIcon={
                    <Icon
                        name='layers'
                        size={24}
                        color={PRIMARY_COLOR}
                    />
                }
                value={configReducer.channel}
                onChangeText={(text)=>dispatch(configActions.addChannel(text))}
            />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default SettingScreen
