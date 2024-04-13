import {Camera} from 'expo-camera'
import {View, StyleSheet,Text,Dimensions, Platform} from 'react-native'
import { useState, useRef, useEffect } from 'react'
export default function ARCam() {
    const [camPermission, setCamPermission] = useState(null)
    //const cameraRef = useRef(null)
    const [camera, setCamera] = useState(null);
    const [imagePadding, setImagePadding] = useState(0);
    const [ratio, setRatio] = useState('4:3');
    const { height, width } = Dimensions.get('window');
    const screenRatio = height / width;
    const [isRatioSet, setIsRatioSet] = useState(false);

    const prepareRatio = async () => {
        let desiredRatio = '4:3';  // Start with the system default
        if (Platform.OS === 'android') {
          const ratios = await camera.getSupportedRatiosAsync();

          let distances = {};
          let realRatios = {};
          let minDistance = null;
          for (const ratio of ratios) {
            const parts = ratio.split(':');
            const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
            realRatios[ratio] = realRatio;

            const distance = screenRatio - realRatio; 
            distances[ratio] = distance;
            if (minDistance == null) {
              minDistance = ratio;
            } else {
              if (distance >= 0 && distance < distances[minDistance]) {
                minDistance = ratio;
              }
            }
          }
          desiredRatio = minDistance;
          const remainder = Math.floor(
            (height - realRatios[desiredRatio] * width) / 2
          );
          setImagePadding(remainder);
          setRatio(desiredRatio);
          setIsRatioSet(true);
        }
      };

    const setCameraReady = async() => {
        if (!isRatioSet) {
          await prepareRatio();
        }
      };

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
            onCameraReady={setCameraReady}
            style={{flex: 1, marginTop: imagePadding, marginBottom: imagePadding}} 
            ref={(ref) => {
                setCamera(ref);
              }}
    ></Camera>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center'
    },
})