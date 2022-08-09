import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.purple3,
    paddingHorizontal: 15, 
    paddingVertical: 10,
    borderRadius: 10
  },
  header_verses_wrap: {
    backgroundColor: Colors.purple2,
    width: RFValue(25),
    height: RFValue(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(50),
  },
  header_verses_number: {
    fontSize: RFValue(14),
    color: Colors.white,
  },
  surah_number: {
    fontSize: RFValue(14),
    color: Colors.black,
  },
  content_container: {
    marginTop: 10
  },
  content_verse_arabic: {
    fontSize: RFValue(24),
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'right',
    marginBottom: 10
  },
  content_verse_languange: {
    fontSize: RFValue(16),
    color: Colors.black,
    textAlign: 'justify',
  }
});
