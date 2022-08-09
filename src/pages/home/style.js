import { StyleSheet } from "react-native";
import Colors from '../../constants/colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header_container: {
        paddingVertical: 24,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  
    header_title: {
        fontSize: RFValue(24),
        fontWeight: '500',
        color: Colors.purple2
    },
    header_subtitle: {
        fontSize: RFValue(18),
        fontWeight: '500',
        color: Colors.grey2,
        marginTop: 10
    },
    purchase_image: {
        height: RFValue(100),
        width: RFValue(100),
    },
    purchase_button: {
        backgroundColor: Colors.purple1,
        borderRadius: 50,
        width: RFValue(60),
        height: RFValue(60),
        position: 'absolute',
        right: RFValue(60/2.5),
        left: RFValue(60/2.5),
        top:RFValue(60/2.5),
        bottom: RFValue(60/2.5),
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    purchase_text: {
        fontSize: RFValue(14),
        fontWeight: '500',
        color: Colors.white,
        textAlign: 'center'
    }
})