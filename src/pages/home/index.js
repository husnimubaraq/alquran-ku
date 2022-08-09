import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { styles } from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import QuranKemenag from 'quran-kemenag';
import SurahItem from '../../components/surah-item/index';
import Colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../constants/routes';
import Lottie from 'lottie-react-native';
import { ImageAssets } from '../../../assets/images/index';

const HomeScreen = () => {

  const navigation = useNavigation();

  const [listSurah, setListSurah] = useState([]);

  const getSurah = async () => {
    const quran = new QuranKemenag();
    const data = await quran.getListSurah();
    setListSurah(data);
  }

  useEffect(() => {
    getSurah()
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header_container}>
        <View>
          <Text style={styles.header_title}>Alquran Ku</Text>
          <Text style={styles.header_subtitle}>Assalamualaikum</Text>
        </View>
        <View>
          <Lottie source={ImageAssets.purchase_loading} autoPlay loop style={styles.purchase_image} />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.purchase_button}
            onPress={() => navigation.navigate(Routes.Purchase)}
          >
            <Text style={styles.purchase_text}>{"Kontribusi"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <SurahItem
        item={item}
        onPress={() => navigation.navigate(Routes.Detail, item)}
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
      <FlatList
        data={listSurah}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  )
}

export default HomeScreen