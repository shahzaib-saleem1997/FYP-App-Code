import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function EmergencyContactsScreen() {
    return (
        <View style={styles.container}>
            <Text> Emergency Contacts Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center', //Aligns all children center of primary axis (i.e vertical in this case)
        alignItems: 'center' //Aligns all children center of secondary axis (i.e horizontal in this case)
    }
})

