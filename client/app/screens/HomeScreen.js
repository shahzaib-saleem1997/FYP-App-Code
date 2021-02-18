import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

export default function HomeScreen({navigation}) {
    return (
        <>
        
        <View style={styles.container} >
            <View style={styles.greetings}>
                <Text style={{color: "#707070"}}>Welcome Back!</Text>
                <Text style={styles.greetUserText}>Syed Emad</Text>
            </View>
            
            <TouchableHighlight 
                style={styles.optionBoxTouchable} 
                underlayColor="#d3d3d3" 
                activeOpacity= {1}
                onPress={() => navigation.navigate("Book Doctor") }
            >
                <View style={styles.optionBox}>
                    <FontAwesome name="stethoscope" size={50} color= "#7380F3" />
                    <Text style= {styles.bookDoctorService}> Book a Doctor </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.optionBoxTouchable} 
                underlayColor="#d3d3d3" 
                activeOpacity= {1}
                onPress={() => navigation.navigate("Stay Fit")} 
            >
                <View style={styles.optionBox}>
                    <FontAwesome name="stethoscope" size={50} color= "#7380F3" />
                    <Text style={styles.stayFitService}> Stay Fit & Healthy </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight 
                style={styles.optionBoxTouchable} 
                underlayColor="#d3d3d3" 
                activeOpacity= {1}
                onPress={() => navigation.navigate("Emergency Contact")}
            >
                <View style={styles.optionBox}>
                    <FontAwesome name="stethoscope" size={50} color= "#7380F3" />
                    <Text style={styles.emergencyContactService}> Emergency Contacts </Text>
                </View>
            </TouchableHighlight>
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

    optionBoxTouchable:{
        backgroundColor: "white",
        width: "85%",
        height: "20%",
        borderRadius: 15,
        marginBottom: "5%",
        
        
        padding:"10%",
      
    },
    optionBox:{
        flexDirection:"row",
        alignItems: "center", //Aligns all children center of secondary axis (i.e vertical in this case)
    },
    greetings:{
        marginBottom: "8%",
        backgroundColor: "#F3F6FF",
        position: "relative",
        alignSelf: "flex-start",
        marginLeft: "7.5%",
       
    },
    greetUserText:{
       fontFamily: "poppins",
       fontWeight: "bold",
       fontSize: 20,
       color: "#707070"
    },
    bookDoctorService:{
        fontFamily: "poppins",
        fontWeight: "bold",
        fontSize: 20,
        color: "#707070",
        marginLeft: "10%"
    },
    stayFitService:{
        fontFamily: "poppins",
        fontWeight: 'bold',
        fontSize: 20,
        color: "#707070",
        marginLeft: "10%"
    },
    emergencyContactService:{
        fontFamily: "poppins",
        fontWeight: 'bold',
        fontSize: 20,
        color: "#ED86AA",
        marginLeft: "10%"
    }
    
})
