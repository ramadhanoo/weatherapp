import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './HourlyForecast.styles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../../../../Themes';
import {TempText} from '../../../../../Components/TempText/TempText';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HourlyForecast = ({
  time,
  title,
  onPressItem,
  tempText,
  subTitle,
  tmpHigest,
  tmpLowest,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.containerOne}>
          <Text numberOfLines={1} style={styles.heading}>
            <Feather
              name="cloud-rain"
              color={Colors.mainColor}
              size={Fonts.size.medium}
            />
          </Text>
        </View>
        <View style={styles.containerTwo}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
        <View style={styles.containerThree}>
          <View style={styles.containerSuhu}>
            <Ionicons
              name="ios-arrow-up-outline"
              size={Fonts.size.small}
              color={Colors.black}
            />
            <TempText
              iconSize={6}
              textSize={Fonts.size.small}
              title={tmpHigest}
              fontTmpStyles={styles.tmpTextStyles}
              colorText={Colors.black}
            />
          </View>
          <View style={styles.containerSuhu}>
            <Ionicons
              name="ios-arrow-down-outline"
              size={Fonts.size.small}
              color={Colors.black}
            />
            <TempText
              iconSize={6}
              textSize={Fonts.size.small}
              title={tmpLowest}
              fontTmpStyles={styles.tmpTextStyles}
              colorText={Colors.black}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

HourlyForecast.defaultProps = {
  time: '',
  title: '',
  subTitle: 'Light rain shower',
  onPressItem: () => {},
  tempText: '12',
  tmpHigest: '10',
  tmpLowest: '10',
};

export default HourlyForecast;
