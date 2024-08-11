import *as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Login, Register, Home} from "./views";
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator ();

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function App () {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
       <Stack.Screen name = "Home" component={Home}/>
       <Stack.Screen name ="Login" component={Login}/>
       <Stack.Screen name ="Register" component={Register}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
    <View style={styles.container}>;
    <Text> Bienvenidos </Text>
    <Image
    source={{uri:"https://www.design.com/maker/social/cn87mtrnbu"}}
    style={{height:200 ,width:200 }}
    />
   </View>
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    padding:20,
    paddingStart:50,
    width:'80%',
    height:60,
    marginTop:20,
    borderRadius:30,
    backgroundColor:'#fff',
  }
});

}
