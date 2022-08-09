import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import {ImageAssets} from '../../../assets/images';
import DropShadow from 'react-native-drop-shadow';

const PurchaseItem = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.item_price}>{item.localizedPrice}</Text>
      {/* <Text style={styles.item_price}>{item.oneTimePurchaseOfferDetails.formattedPrice}</Text> */}
      <Text style={styles.item_description}>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default PurchaseItem;
