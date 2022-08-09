import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './style';
import { ImageAssets } from '../../../assets/images';
import * as Icons from '../../../assets/icons'
import Colors from '../../constants/colors';

const SurahDetailItem = ({
    item,
    onPlay
}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header_container}>
            <View style={styles.header_verses_wrap}>
                <Text style={styles.header_verses_number}>{item.verse_number}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    
                }}
            >
                <Icons.PlayIcon size={20} color={Colors.purple1} />
            </TouchableOpacity>
        </View>
        <View style={styles.content_container}>
            <Text style={styles.content_verse_arabic}>{item.verse_arabic}</Text>
            <Text style={styles.content_verse_languange}>{item.verse_bahasa}</Text>
        </View>
    </View>
  )
}

export default SurahDetailItem