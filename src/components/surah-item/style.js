import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  surah_item_wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    flex: 1,
  },
  surah_number_bg: {
    width: RFValue(40),
    height: RFValue(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  surah_number: {
    fontSize: RFValue(14),
    fontWeight: '500',
    color: Colors.black,
  },
  surah_name: {
    fontSize: RFValue(18),
    fontWeight: '500',
    color: Colors.black,
  },
  surah_name_arabic: {
    fontSize: RFValue(20),
    fontWeight: '500',
    color: Colors.purple1,
  },
  surah_verses: {
    fontSize: RFValue(16),
    color: Colors.grey2,
  },
});
