import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

export default function HomeScreen() {
    return (
        <>
        
        <View style={styles.container} >
            <View style={styles.greetings}>
                <Text> Welcome Back!</Text>
                <Text> Syed Emad</Text>
            </View>
            
            <View style={styles.optionBox}>
                <FontAwesome name="stethoscope" size={50} color= "#7380F3" />
                <Text> Book a Doctor </Text>
            </View>
            <View style={styles.optionBox}>
                <FontAwesome name="stethoscope" size={50} color= "#7380F3" />
                <Text> Stay Fit & Healthy </Text>
            </View>
            <View style={styles.optionBox}>
                <FontAwesome name="stethoscope" size={50} color= "#7380F3" />
                <Text> Emergency Contacts </Text>
            </View>
        </View>
        </>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center', //Aligns all children center of secondary axis (i.e horizontal in this case)
        backgroundColor: "#F3F6FF",
    },

    optionBox:{
        backgroundColor: "white",
        width: "85%",
        height: "20%",
        borderRadius: 15,
        marginBottom: "5%",
        flexDirection: "row", //sets the primary axis to horizontal 
        alignItems: "center", //Aligns all children center of secondary axis (i.e vertical in this case)
        padding:"10%"
    },
    greetings:{
        marginLeft:"-60%",
        marginBottom: "8%",
        backgroundColor: "#F3F6FF",
        position: "relative"
    }
})
