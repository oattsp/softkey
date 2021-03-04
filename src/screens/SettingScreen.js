import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { APP_NAME, PRIMARY_COLOR } from '../Constants'
import { Input, Button } from 'react-native-elements'
import * as configActions from '../actions/config.action'

const SettingScreen = ({ config, dispatch, navigation }) => {

    useEffect(() => {
        setNavigationOption()
    }, [])

    const setNavigationOption = () => {
        navigation.setOptions({
            title: APP_NAME,
            headerStyle: {
                backgroundColor: PRIMARY_COLOR,
            },
            headerTintColor: '#fff',
            headerBackTitle: ' ',
        })
    }

    const saveChanges = () => {
        configActions.saveChanges(config.ip, config.port, config.channel).then((result) => {
            Alert.alert(
                result.title,
                result.message,
                [
                    {
                        text: "OK", onPress: () => {
                            if (result.status) {
                                navigation.goBack()
                            }
                        }
                    }
                ],
                { cancelable: false }
            );
        })
    }

    return (
        <ScrollView style={styles.container}>
            <Input
                label='IP Address'
                labelStyle={{ marginTop: 10 }}
                placeholder='IP ADDRESS'
                leftIcon={
                    <Icon
                        name='language'
                        size={24}
                        color={PRIMARY_COLOR}
                    />
                }
                value={config.ip}
                onChangeText={(text) => dispatch(configActions.addIp(text))}
            />
            <Input
                keyboardType="number-pad"
                label='Port'
                placeholder='PORT'
                leftIcon={
                    <Icon
                        name='bolt'
                        size={24}
                        color={PRIMARY_COLOR}
                    />
                }
                value={config.port}
                onChangeText={(text) => dispatch(configActions.addPort(text))}
                errorMessage={config.error_port_message}
                renderErrorMessage={config.error_port}
            />
            <Input
                keyboardType="number-pad"
                label='Channel'
                placeholder='CHANNEL'
                leftIcon={
                    <Icon
                        name='layers'
                        size={24}
                        color={PRIMARY_COLOR}
                    />
                }
                value={config.channel}
                onChangeText={(text) => dispatch(configActions.addChannel(text))}
                errorMessage={config.error_channel_message}
                renderErrorMessage={config.error_channel}
            />
            <View style={styles.buttonSave}>
                <Button
                    buttonStyle={styles.buttonStyle}
                    onPress={saveChanges}
                    icon={
                        <View style={styles.iconButton}>
                            <Icon
                                name="save"
                                size={25}
                                color="white"
                            />
                        </View>
                    }
                    title="Save Changes"
                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonSave: {
        paddingHorizontal: 20,
        paddingTop: 5
    },
    iconButton: {
        marginEnd: 10
    },
    buttonStyle: {
        backgroundColor: 'tomato',
        color: '#fff'
    }
})

export default SettingScreen
