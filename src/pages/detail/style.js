import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header_container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  header_top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_title: {
    fontSize: RFValue(18),
    fontWeight: '500',
    color: Colors.purple2,
    marginLeft: 15,
  },
  surah_list: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  },
  header_card_shadow: {
    shadowColor: Colors.purple1,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  header_card: {
    backgroundColor: Colors.purple1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginBottom: 10,
    alignItems: 'center'
  },
  header_surah_name: {
    fontSize: RFValue(24),
    fontWeight: '500',
    color: Colors.white,
  },
  header_surah_name_language: {
    fontSize: RFValue(18),
    color: Colors.white,
    marginTop: 5,
    marginBottom: 10
  },
  header_surah_verse_count: {
    fontSize: RFValue(18),
    color: Colors.white,
    marginBottom: 20
  },
  line: {
    height: 1,
    backgroundColor: Colors.line,
    width: '70%',
    marginBottom: 20,
    marginTop: 10
  }
});
