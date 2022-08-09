import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../constants/routes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageAssets} from '../../../assets/images/index';
import * as Backgrounds from '../../../assets/backgrounds';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_container}>
        <Text Text style={styles.header_title}>
          Alquran Ku
        </Text>
        <Text Text style={styles.header_subtitle}>
          {'Belajar quran dan membaca \nsekali setiap hari'}
        </Text>
      </View>
      <View>
        <ImageBackground
          source={ImageAssets.bg}
          style={styles.background_card}
          borderRadius={20}>
          <Backgrounds.QuranBackground
            width={width / 1.5}
            height={width / 1.5}
          />
        </ImageBackground>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(Routes.Home)}
          style={styles.button_start}>
          <Text style={styles.button_start_text}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StartScreen;
