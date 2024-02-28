import {Camera} from 'expo-camera'
import {View, StyleSheet,Text} from 'react-native'
import { useState, useRef, useEffect } from 'react'
export default function ARCam() {
    const [camPermission, setCamPermission] = useState(null)
    const [isCameraActive, setIsCameraActive] = useState(true);
    const cameraRef = useRef(null)

    useEffect(() => {
        (async() => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync()
            setCamPermission(cameraStatus.status === 'granted')
        })()
    }, [])

    if (!camPermission) {
        return(
            <Text>No access to camera</Text>
        )
    }
  return (
    <View style={styles.container}>
        <Camera
            style={{flex: 1,width:"100%"}} 
            ref={cameraRef}
    ></Camera>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
})