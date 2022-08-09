import { View, Text } from 'react-native'
import React from 'react'
import Navigator from './navigator';
import {withIAPContext} from 'react-native-iap';

// RNIap.setAndroidNativeModule(NativeModules.RNIapModule)
// RNIap.initConnection()

function App() {
  return (
    <Navigator/>
  )
}

export default withIAPContext(App);