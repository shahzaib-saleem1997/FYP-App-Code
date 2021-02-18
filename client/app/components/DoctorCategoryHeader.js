import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function DoctorCategoryHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Top{"\n"}Doctors</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        width:100,
        backgroundColor: "#6876E4",
      
        marginRight: wp(4),
        borderRadius: 15,
        alignItems:"center",
        justifyContent:"center"

    },
    text:{
        fontWeight: "bold",
        color: "white",
        fontSize: 15
    }
})
