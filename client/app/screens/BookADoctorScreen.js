import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,FlatList} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import DoctorCategory from '../components/DoctorCategory';
import DoctorCategoryHeader from '../components/DoctorCategoryHeader';

const categories = [
    { 
      id: 1,
      category: 'Brain',
    },
    {
      id: 2,
      category: 'Heart',
    },
    {
      id: 3,
      category: 'Gynecologist',
    },
    {
      id: 4,
      category: 'Urologist',
    },
    {
      id: 5,
      category: 'Skin Specialist',
    },
  ];

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
            <Text style ={styles.screenSubHeading}>Category</Text>
            <FlatList
                ListHeaderComponent= {<DoctorCategoryHeader/>}
                data={categories}
                keyExtractor={item => item.id}
                renderItem={({item}) => <DoctorCategory category={item.category}/>}
                horizontal ={true}
                style={{marginLeft:"7.5%",marginBottom:hp(2)}}
            />
            <Text style ={styles.screenSubHeading}>Top Doctors</Text>
            <View style={styles.docDetailsContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        alignItems: 'center', //Aligns all children center of secondary axis (i.e horizontal in this case)
        backgroundColor: "#F3F6FF"
    },
    screenHeading:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "flex-start",
        marginVertical: hp(1),
        marginLeft: "7.5%",
        color: "#707070",
    },
    screenSubHeading:{
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "flex-start",
        marginTop: hp(0.5),
        marginBottom: hp(2),
        marginLeft: "7.5%",
        color: "#707070",
    },
    searchBoxContainer:{
        width: "85%",
        height: hp(8),
        backgroundColor: "white",
        marginVertical: hp(3),
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
    },
    docDetailsContainer:{
        width: "85%",
        height: hp(20),
        backgroundColor: "white",
        borderRadius: 15
    }

})
