import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './Header.styles';
import {Colors, Fonts} from '../../../Themes';
import {TempText} from '../../TempText/TempText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lottie from 'lottie-react-native';
import {ScreenWidth} from '../../../Transforms';

export const Header = ({
  status,
  tempText,
  tmpHigest,
  tmpLowest,
  onPressDetail,
}) => {
  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../../Images/background.json')}
        autoPlay
        loop
        style={{width: ScreenWidth}}
      />
      <View style={styles.lottie}>
        <TouchableOpacity
          onPress={onPressDetail}
          style={styles.buttonStyle}
          activeOpacity={0.8}>
          <Text style={styles.styleText}>
            <AntDesign name="star" color={Colors.white} /> {'  '}
            London UK
          </Text>
        </TouchableOpacity>
        <View style={styles.containerRow}>
          <Fontisto
            name="day-cloudy"
            color={Colors.white}
            size={Fonts.size.h1}
          />
          <TempText iconSize={10} textSize={Fonts.size.h1} title={tempText} />
        </View>
        <View style={[styles.containerRow]}>
          <View style={styles.containerSuhu}>
            <Ionicons
              name="ios-arrow-up-outline"
              size={Fonts.size.small}
              color={Colors.white}
            />
            <TempText
              iconSize={6}
              textSize={Fonts.size.sub_small}
              title={tmpHigest}
              fontTmpStyles={styles.tmpTextStyles}
            />
          </View>
          <View style={styles.containerSuhu}>
            <Ionicons
              name="ios-arrow-down-outline"
              size={Fonts.size.small}
              color={Colors.white}
            />
            <TempText
              iconSize={6}
              textSize={Fonts.size.sub_small}
              title={tmpLowest}
              fontTmpStyles={styles.tmpTextStyles}
            />
          </View>
        </View>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
};

Header.defaultProps = {
  status: '',
  tempText: 0,
  tmpHigest: 0,
  tmpLowest: 0,
  onPressDetail: () => {},
};
