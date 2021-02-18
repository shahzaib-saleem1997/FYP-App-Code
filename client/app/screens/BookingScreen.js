import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BookingScreen() {
    return (
        <View style={styles.container}>
            <Text> Booking Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center", //Aligns all children center of primary axis (i.e vertical in this case)
        alignItems: 'center', //Aligns all children center of secondary axis (i.e horizontal in this case)
        backgroundColor: "#F3F6FF",
    }
})
