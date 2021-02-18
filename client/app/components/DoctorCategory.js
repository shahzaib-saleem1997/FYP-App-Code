import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function DoctorCategory({category}) {
    return (
        <View style={styles.container}>
                <MaterialCommunityIcons
                        name="brain"
                        size = {hp(5)}
                        color= "#6B79E4"
                />
                <Text style={{fontWeight: "bold"}}>{category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        width:100,
        backgroundColor: "white",
      
        marginRight: wp(4),
        borderRadius: 15,
        alignItems:"center",
        justifyContent:"center"
    }
})
