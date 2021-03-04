import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import * as configActions from '../actions/config.action'
import { Picker } from '@react-native-picker/picker'

const TabWaitQ = ({ config, dispatch, navigation }) => {

    useEffect(() => {
        dispatch(configActions.getConfigFromStorage())
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.viewServiceType}>
                <Text>Service Types</Text>
                <Picker
                    style={styles.pickerStyle}
                    selectedValue={"java"}
                    onValueChange={(itemValue, itemIndex) =>{}
                        // setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewServiceType: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pickerStyle: {
        width: 100
    }
})

export default TabWaitQ
