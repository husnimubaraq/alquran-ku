import { View, Text, FlatList, TouchableOpacity, ToastAndroid, Button, NativeModules, NativeEventEmitter } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { styles } from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import QuranKemenag from 'quran-kemenag';
import Colors from '../../constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icons from '../../../assets/icons'
import * as Backgrounds from '../../../assets/backgrounds'
import DropShadow from 'react-native-drop-shadow';
import { RFValue } from 'react-native-responsive-fontsize';
import PurchaseItem from '../../components/purchase-item/index';
import RNIap, {Sku, useIAP} from 'react-native-iap';
// import useInAppPurchase from '../../hooks/useInAppPurchase';

// const {InAppModule} = NativeModules;

// const eventEmitter = new NativeEventEmitter(NativeModules.InAppModule);

const itemSKUs = [
  'com.alquranku.kontribusi_80', 
  'com.alquranku.kontribusi_170',
  'com.alquranku.kontribusi_250',
  'com.alquranku.kontribusi_300',
  'com.alquranku.kontribusi_550',
  'com.alquranku.kontribusi_1500',
  'com.alquranku.kontribusi_2500',
  'com.alquranku.kontribusi_4000'
]

const PurchaseScreen = () => {
  const navigation = useNavigation()
  const route = useRoute();

  const [success, setSuccess] = useState(false);

  // const {isFullAppPurchased, connectionErrorMsg, purchaseFullApp} = useInAppPurchase()

  const {
    connected,
    products,
    currentPurchase,
    currentPurchaseError,
    initConnectionError,
    availablePurchases,
    getAvailablePurchases,
    finishTransaction,
    getProducts,
    requestPurchase,
  } = useIAP();

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   if(connectionErrorMsg){
  //     ToastAndroid.show(connectionErrorMsg, ToastAndroid.LONG);
  //   }
  // }, [connectionErrorMsg]);
  
  // console.log('isFullAppPurchased: ', isFullAppPurchased)

  const handleGetProducts = async () => {
    try {
      await getProducts(itemSKUs);
    } catch (error) {
      if (error instanceof RNIap.IapError) {
        console.log({message: `[${error.code}]: ${error.message}`, error});
      } else {
        console.log({message: 'handleGetProducts', error});
      }
    }
  };

  const handleBuyProduct = async (sku) => {
    try {
      await requestPurchase({
        sku,
        andDangerouslyFinishTransactionAutomaticallyIOS: false,
      });
    } catch (error) {
      if (error instanceof RNIap.IapError) {
        errorLog({message: `[${error.code}]: ${error.message}`, error});
      } else {
        errorLog({message: 'handleBuyProduct', error});
      }
    }
  };

  useEffect(() => {
    handleGetProducts()
  }, []);

  useEffect(() => {
    console.log('availablePurchases: ', availablePurchases)
  }, [availablePurchases]);

  useEffect(() => {
    if(connected){
      console.log('connected: ', connected)
    }
  }, [connected]);

  useEffect(() => {
    console.log('initConnectionError: ', initConnectionError)
  }, [initConnectionError]);

  useEffect(() => {
    console.log('currentPurchaseError: ', currentPurchaseError)
  }, [currentPurchaseError]);

  useEffect(() => {
    if(products){
      console.log('products: ', products)
    }
  }, [products]);

  useEffect(() => {
    const checkCurrentPurchase = async () => {
      try {
        if (currentPurchase?.transactionReceipt) {
          await finishTransaction(currentPurchase, true);
          setSuccess(true);
          ToastAndroid.show('Pembayaran berhasil', ToastAndroid.LONG);
        }
      } catch (error) {
        if (error instanceof RNIap.IapError) {
          console.log({message: `[${error.code}]: ${error.message}`, error});
        } else {
          console.log({message: 'handleBuyProduct', error});
        }
      }
    };

    checkCurrentPurchase();
  }, [currentPurchase, finishTransaction]);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header_container}>
        <DropShadow style={styles.header_card_shadow}>
          <View style={styles.header_card}>
            <Text style={styles.header_text}>{"BERIKAN KONTRIBUSI ANDA UNTUK MENGEMBANGKAN APLIKASI INI"}</Text>
          </View>
        </DropShadow>
      </View>
    )
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <PurchaseItem
        item={item}
        onPress={() => handleBuyProduct(item.productId)}
        
      />
    )
  }, []);

  const renderSeparator = useCallback(() => {
    return (
      <View style={{height: 1.5, width: '100%', backgroundColor: Colors.line}} />
    )
  }, []);

  const keyExtractor = useCallback((_, i) => i.toString(), []);

  products.sort((a, b) => {
    return a.price - b.price;
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.header_top}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Icons.ChevronLeftIcon size={20} />
          </TouchableOpacity>
          <Text style={styles.header_title}>Kontribusi</Text>
        </View>
      </View>
      {/* <Button title="Get Products" onPress={handleGetProducts} /> */}
      {/* <Button title="Get Products" onPress={createInAppModulePromise} /> */}
      <FlatList
        data={products}
        // data={[]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  )
}

export default PurchaseScreen