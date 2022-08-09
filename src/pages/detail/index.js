import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { styles } from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import QuranKemenag from 'quran-kemenag';
import Colors from '../../constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import SurahDetailItem from '../../components/surah-detail-item/index';
import * as Icons from '../../../assets/icons'
import * as Backgrounds from '../../../assets/backgrounds'
import DropShadow from 'react-native-drop-shadow';
import { RFValue } from 'react-native-responsive-fontsize';

const DetailScreen = () => {

  const navigation = useNavigation()
  const route = useRoute();

  const [surah, setSurah] = useState(null);
  const [verses, setVerses] = useState([]);

  const getSurah = async (surah_id) => {
    const quran = new QuranKemenag();
    const data = await quran.getSurah(surah_id)
    // console.log('data: ', data.verses[0].)
    setSurah(data);
    setVerses(data.verses || [])
  }

  useEffect(() => {
    getSurah(route.params.surah_id)
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header_container}>
        <DropShadow style={styles.header_card_shadow}>
          <View style={styles.header_card}>
            <Text style={styles.header_surah_name}>{surah?.surah_name}</Text>
            <Text style={styles.header_surah_name_language}>{surah?.surah_name_arabic}</Text>
            <View style={styles.line} />
            <Text style={styles.header_surah_verse_count}>{surah?.surah_verse_count} ayat</Text>
            <Backgrounds.BismillahBackground width={RFValue(200)} height={RFValue(55)} color={Colors.white} />
          </View>
        </DropShadow>
      </View>
    )
  }, [surah]);

  const renderItem = useCallback(({item}) => {
    return (
      <SurahDetailItem
        item={item}
        onPlay={() => {
          
        }}
      />
    )
  }, []);

  const renderSeparator = useCallback(() => {
    return (
      <View style={{height: 1.5, width: '100%', backgroundColor: Colors.line}} />
    )
  }, []);

  const keyExtractor = useCallback((_, i) => i.toString(), []);

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
          <Text style={styles.header_title}>{surah?.surah_name}</Text>
        </View>
      </View>
      <FlatList
        data={verses}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.surah_list}
      />
    </SafeAreaView>
  )
}

export default DetailScreen