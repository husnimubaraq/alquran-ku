import { StyleSheet, Dimensions } from "react-native";
import Colors from '../../constants/colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_container: {
        paddingVertical: 24,
        paddingHorizontal: 15,
        alignItems: 'center'
    },  
    header_title: {
        fontSize: RFValue(24),
        fontWeight: '500',
        color: Colors.purple2,
        textAlign:'center'
    },
    header_subtitle: {
        fontSize: RFValue(18),
        color: Colors.grey2,
        marginTop: 10,
        textAlign:'center'
    },
    background_card: {
        height: width,
        borderRadius:10,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems:'center',
        justifyContent:'flex-end',
        paddingBottom: width / 10
    },
    button_start: {
        backgroundColor: Colors.purple1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        width: '50%',
        marginTop: 30,
        borderRadius: 10,
        alignSelf:'center',
    },
    button_start_text: {
        fontSize: RFValue(16),
        color: Colors.white,
        textAlign:'center'
    }
})