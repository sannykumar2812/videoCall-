import React ,{useState}from 'react'


import { 
    View,
    StyleSheet,
    Pressable
} from 'react-native'


import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"

function CallActionBox() {
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);
    `       `
    const onReverseCamera = () => {
        console.warn('onReverseCamera');
    };
    
    const onToggleCamera = () => {
        setIsCameraOn(currentValue => !currentValue);
    };
    
    const onToggleMicrophone = () => {
        setIsMicOn(currentValue => !currentValue);
    };

    const onHangup=()=>{}


return (
    <View style={styles.bottonContainers}>

        <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name="camera-reverse-outline" size={40} color={'white'} />
        </Pressable>

    <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <Feather
            name={isCameraOn ? 'video-off' : 'video'}
            size={40}
            color={'white'}
        />
    </Pressable>

    <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialIcons
        name={isMicOn ? 'microphone-off' : 'microphone'}
        size={40}
        color={'white'}
        />
    </Pressable>

    <Pressable
        onPress={onHangup}
        style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MaterialIcons name="phone-hangup" size={40} color={'white'} />
    </Pressable>
            </View>
)
}

const styles = StyleSheet.create({
    bottonContainers: {
    backgroundColor: 'white',
    // backgroundColor: '#333333',
    padding: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    },
    iconButton: {
    backgroundColor: '#4a4a4a',
    // backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    justifyContent:'center'
    },
});
export default CallActionBox;