import {StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  item_card_shadow: {
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  item_card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 25,
    marginBottom: 10,
    alignItems: 'center'
  },
  item_price: {
    fontSize: RFValue(18),
    fontWeight: '500',
    color: Colors.black,
  },
  item_description: {
    fontSize: RFValue(14),
    color: Colors.grey2,
    marginTop: 5
  },
});
