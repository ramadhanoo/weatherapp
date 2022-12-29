import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './DayForecast.styles';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../../../../../Themes';
import {TempText} from '../../../../../Components/TempText/TempText';
const ChanceRain = ({time, title, onPressItem, tempText}) => {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.heading}>
          {time}
        </Text>
        <Feather
          name="cloud-rain"
          color={Colors.mainColor}
          size={Fonts.size.small}
        />
        <Text numberOfLines={1} style={styles.subHeading}>
          {title}
        </Text>
        <TempText
          colorText={Colors.black}
          iconSize={5}
          textSize={Fonts.size.mini}
          title={tempText}
          fontTmpStyles={styles.tmpStyles}
        />
      </View>
    </TouchableOpacity>
  );
};

ChanceRain.defaultProps = {
  time: '',
  title: '',
  onPressItem: () => {},
  tempText: '12',
};

export default ChanceRain;
