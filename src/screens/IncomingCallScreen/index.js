import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"




import {
    View,
    Text,
    StyleSheet,
    Pressable
 } from 'react-native'


const IncomingCallScreen = () => {

const onDecline = () => {
    console.warn("on decline");
};

const onAccept =( ) => {
    console.warn("on Accept");
};

  return (
    <View  style={styles.page}>
    <View style={styles.cameraPreview}>
            <Text style={styles.name}>Sanny</Text>
            <Text style={styles.phoneNumber}> ringing +91 70 2464 51 06 </Text>
            <Feather  name="phone-call" style={styles.incomingsign} />
            </View>

            <View style={[styles.row, {marginTop:'auto'}]}> 
                <View style={styles.iconsContainer}>
                    <Ionicons  name="alarm" color={"white"} size={50}/>
                    <Text style={styles.iconText}>Remind me</Text>
                </View>
                    <View style={styles.iconsContainer}>
                        <Feather  name="message-circle" color={"white"} size={50} />
                        <Text style={styles.iconText}>Message</Text>
                </View>
            </View>
                
            <View style={styles.row}>

                {/* Accept-button */}
                <Pressable onPress={onAccept}
                    style={styles.iconsContainer} >
                    <View style={styles.accept}> 
                        <MaterialIcons name="check" size={40} color={'white'}/> 
                    </View>
                    <Text style={styles.iconText}>Accept</Text>
                </Pressable>

                {/* Decline-button */}
                <Pressable onPress={onDecline}
                style={styles.iconsContainer}>
                        <View style={styles.decline}>
                            <Feather name="x" size={40} color={'white'}  />
                        </View>
                    <Text style={styles.iconText}>Decline</Text>
                </Pressable>
            </View>
            
            
    </View>
)
}

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 50,
        marginBottom: 15,
        },
    phoneNumber: {
        fontSize: 20,
        color: 'black',
        },
    page: {
            height: '100%',
            backgroundColor: '#169df7',
            },
    cameraPreview: {
                flex: 1,
                alignItems:'center',
                paddingTop: 10,
                paddingHorizontal: 10,
                },
            incomingsign:{
                padding:100,
                color:'#b8b1a0',
                height:"100%",
                width:"80%",
                fontSize:90,
                marginTop:50

            },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:"100%"
    },
    iconsContainer:{
alignItems:'center',
marginVertical:20
    },
iconText:{
   color:'white'
},
decline:{
    backgroundColor:"red",
    padding:15,
    borderRadius:50,
    margin:10
},
accept:{
    backgroundColor:"green",
    padding:15,
    borderRadius:50,
    margin:10
}

})
export default IncomingCallScreen