import React from 'react'


import { 
    View,
    StyleSheet
        } from 'react-native'


        import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"

function CallActionBox() {
  return (
    <View style={styles.bottonContainers}>
                <View style={styles.iconButton}>
                <Ionicons name="camera-reverse-outline" size={40} />
                </View>

                <View style={styles.iconButton}>
                <Feather name="video-off" size={40} />
                </View>

                <View style={styles.iconButton}>
                <Feather name="volume-2" size={40} />
                </View>

                <View style={styles.iconButton}>
                <MaterialIcons name="microphone-off" size={40} />
                </View>
                
                <View style={[styles.iconButton,{backgroundColor:"red"},styles.circle]}>
                <MaterialIcons name="phone-hangup" size={40} color={'white'}  />
                </View>
            </View>
  )
}

const styles = StyleSheet.create({
    bottonContainers:{
        backgroundColor:'white',
        padding:10,
        flexDirection:'row',
    },
    iconButton:{
        padding:15,
        justifyContent:'center'   
    },
    circle: {
        height:70,
        width: 70,
        borderRadius: 70,
}


});
export default CallActionBox;