import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './style';
import { ImageAssets } from '../../../assets/images';

const SurahItem = ({
    item,
    onPress
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View
        // source={ImageAssets.num_bg}
        style={styles.surah_number_bg}
      >
        <Text style={styles.surah_number}>{item.surah_id}</Text>
      </View>
      <View style={styles.surah_item_wrap}>
        <View>
          <Text style={styles.surah_name}>{item.surah_name}</Text>
          <Text style={styles.surah_verses}>{item.surah_verse_count} ayat</Text>
        </View>
        <Text style={styles.surah_name_arabic}>{item.surah_name_arabic}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SurahItem