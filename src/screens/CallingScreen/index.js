import React ,{ useState,useEffect}from 'react'


import { 
    View,
    Text,
    StyleSheet,
    Pressable,
    Alert,
    PermissionsAndroid
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CallActionBox from '../../components/callActionBox'
import { useNavigation ,useRoute} from '@react-navigation/core'


const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA,
];

const CallingScreen = ()=>{
const [permissionGranted, setPermissionGranted] = useState(false);

    //adding a goback functaionality in calling screen
    const navigation = useNavigation()
    const goBack = () => {
        navigation.pop();
    };
// add a fuctionality to show a constacts name in calling screen 
    const route = useRoute();
    const user = route?.params.user;

    //Android permission
    useEffect(() => {
        const getPermissions = async () => {
            const granted = await PermissionsAndroid.requestMultiple(permissions);
            const recordAudioGranted =
            granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
        const cameraGranted =
            granted[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
        if (!cameraGranted || !recordAudioGranted) {
            Alert.alert('Permissions not granted');
        } else {
            setPermissionGranted(true);
        }
        };

        if (Platform.OS === 'android') {
            getPermissions();
        } else {
            setPermissionGranted(true);
        }
        }, []);


    return(
        <View  style={styles.page}>
            <Pressable onPress={goBack} style={styles.backButton}>
                <Ionicons name="chevron-back" color="white" size={25} />
            </Pressable>
            <View style={styles.cameraPreview}>
                <Text style={styles.name}>{user?.user_display_name}</Text>
                <Text style={styles.phoneNumber}> ringing +91 70 2464 51 06 </Text>
            </View>
            <CallActionBox />
        </View>

    )
}


const styles = StyleSheet.create({
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
    localVideo: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 100,
    },
    remoteVideo: {
    backgroundColor: '#7b4e80',
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 100,
    },
    name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginBottom: 15,
    },
    phoneNumber: {
    fontSize: 20,
    color: 'white',
    },
    backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 10,
    },
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

export default CallingScreen;