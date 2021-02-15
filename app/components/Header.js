import React from 'react'
import { StyleSheet, View,TouchableWithoutFeedback} from 'react-native'
import Feather from 'react-native-vector-icons/dist/Feather';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
                <Feather
                    style={styles.hamburgerMenu}
                    name="menu"
                    size = {hp(4)}
                    color= "black"
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: "100%",
        height: "10%",
        alignItems: "center",
        backgroundColor: "#F3F6FF"
    },
    hamburgerMenu: {
        position: "absolute",
        left: "2%",
    },

})
