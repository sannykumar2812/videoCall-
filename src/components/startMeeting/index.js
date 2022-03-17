import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

function StartMeeting({name,setName,roomId,setroomId, joinRoom}) {
  return (
    <View>
        {/* start meeting section */}
        <View style={styles.info}>
                        <TextInput 
                            style={styles.textinput} 
                            placeholder={'Enter name'}
                            placeholderTextColor={'white'}
                            value={name}
                            onChangeText={(text)=>setName(text)}
                        />
                    </View>
                    <View style={styles.info}>
                        <TextInput 
                            style={styles.textinput} 
                            placeholder={'Room id'}
                            placeholderTextColor={'white'}
                            value={roomId}
                            onChangeText={(text)=>setroomId(text)}
                        />
                    </View>
                    <View style={{width:"100%"}}> 
                        <TouchableOpacity
                            style={styles.startButtonMeeting}
                            onPress={()=>joinRoom()}
                            >
                                <Text style={{color:"black"}}>Start meeting</Text>
                        </TouchableOpacity>
                    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    info:{
        width:"100%",
        backgroundColor:"#373538",
        height:70,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"white",
        padding:10,
        justifyContent:'center'
    },
    textinput:{
        color: 'white',
        fontSize:18,
    },
    startButtonMeeting:{
        marginTop:20,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"white",
        height:60,
        borderRadius:50
    }
})
export default StartMeeting


