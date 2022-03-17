import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import CallActionBox from '../../components/callActionBox'; 

const CallScreen = () => {
return (
    <View  style={styles.page}>
            <View style={styles.cameraPreview}>
            </View>
            <CallActionBox />
        </View>
);
};

const styles = StyleSheet.create({
page: {
    height: '100%',
    backgroundColor: '#7b4e80',
},
cameraPreview: {
    width: 100,
    height: 150,
    backgroundColor: '#ffff6e',
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 40,
}
});

export default CallScreen;