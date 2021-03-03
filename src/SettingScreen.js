import React, { useEffect } from 'react'
import { TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { AppName, PrimaryColor } from './Constants'
import { Input } from 'react-native-elements';

const SettingScreen = (props) => {

    useEffect(() => {
        setNavigationOption()
    }, [])

    const setNavigationOption = () => {
        props.navigation.setOptions({
            title: AppName,
            headerStyle: {
                backgroundColor: PrimaryColor,
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
                        color={PrimaryColor}
                    />
                }
            />
            <Input
                label='Port'
                placeholder='PORT'
                leftIcon={
                    <Icon
                        name='bolt'
                        size={24}
                        color={PrimaryColor}
                    />
                }
            />
            <Input
                label='Channel'
                placeholder='CHANNEL'
                leftIcon={
                    <Icon
                        name='layers'
                        size={24}
                        color={PrimaryColor}
                    />
                }
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
