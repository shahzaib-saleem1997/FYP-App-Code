import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';

export default function BookADoctorScreen() {

    const [searchText, setSearchText] = useState("")

    return (
        <View style={styles.container}>
            <Text style ={styles.screenHeading}>Doctor {"\n"}Booking </Text>
            <View style={styles.searchBoxContainer}>
                <View style={styles.searchArea}>
                    <TextInput
                        placeholder ="Search Doctor e.g Dr Sohaib"
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                </View>
                <View style={styles.searchIcon}>
                    <EvilIcons 
                        name="search"
                        size = {hp(3)}
                        color= "#6B79E4"
/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center', //Aligns all children center of secondary axis (i.e horizontal in this case)
        backgroundColor: "#F3F6FF"
    },
    screenHeading:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "flex-start",
        marginVertical: hp(2),
        marginLeft: "7.5%",
        color: "#707070",
    },
    searchBoxContainer:{
        width: "85%",
        height: hp(8),
        backgroundColor: "white",
        marginVertical: "10%",
        borderRadius: 20,
        flexDirection: "row",
        padding: 10
    },
    searchArea:{
        marginLeft:"5%",
        width:"80%",
     
    },
    searchIcon:{
        alignItems: "center",
        justifyContent: "center"
    }
})
