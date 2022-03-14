import React,{ useState ,useEffect} from 'react';


import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'

import CallActionBox from '../../components/CallActionBox'
import StartMeeting from '../../components/StartMeeting';
import { io } from 'socket.io-client';
import { Camera } from 'expo-camera';

const  Homescreen = () => {
const [ name, setName ] = useState();
const [roomId, setroomId] = useState();
const [activeUsers,setActiveUsers]= useState(["hemant","vivek"]);
// const [startCamera,setStartCamera]=useState(false);
const [startCamera,setStartCamera]=useState(true);

const  CameraOn = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted"){
        setStartCamera(true);
    } else {
        Alert.alert("Access denied");
        }
}

const joinRoom = ()=> {
    CameraOn();
    socket.emit('join-room',{roomId:roomId,userName: name})
}
useEffect(()=>{
    const API_URL = "http://172.20.10.3:3001/"

// const API_URL = "http://192.168.1.114:3001/"

    socket = io(`${API_URL}`);
    socket.on('connection',()=>console.log("connected"))

    socket.on("all-users",users=>{
    console.log("Active Users");
    console.log(users);
    setActiveUsers(users)
    })
},[])

    return( 
        <View style={styles.container}>
            {/* start meeting section */}
            {startCamera ? (
                <SafeAreaView style={{flex:1}}>
                    <View style={styles.activeContainer}>
                        <View style={styles.cameraContainer}>
                        < Camera
                        type={"front"}
                        style={{width:activeUsers.length==0 ? "100%":200,
                        height:activeUsers.length==0 ? 600 : 200,
                        marginTop:10
                    }}
                    ></Camera>
                    { activeUsers.map((user, index)=>
                    <View 
                    key={index}
                    style={styles.activeUserContainer}>
                        <Text style={{color:'white'}}>{user}</Text>
                    </View>
                    )}
                    </View>
                    </View>
                        <CallActionBox />
                </SafeAreaView>   
            ) : (
                //start-meeting section
                <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setroomId={setroomId}
                joinRoom={joinRoom}
                />
            )}
        </View>
        )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#169df7",
        flex:1,
        // padding:100,
    },
    cameraContainer:{
        // flex:1,
        backgroundColor:"#169df7",
        justifyContent:"center",
        flexDirection: 'row',
        flexWrap:"wrap",
        alignItems:'center'
    },
activeContainer:{
    flex:1
},
    activeUserContainer:{
        borderColor:"gray",
        borderWidth:1,
        width:200,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    }
    
})

export default Homescreen;