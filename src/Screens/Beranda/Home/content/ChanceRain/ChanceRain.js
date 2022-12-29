import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './ChanceRain.styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../../../../Themes';
const ChanceRain = ({time, title, onPressItem, colorIcons}) => {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      activeOpacity={0.8}
      style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          <FontAwesome5 size={15} name={'globe-europe'} color={colorIcons} />
          {'  '}
          at {time}
        </Text>
        <Text numberOfLines={1} style={styles.subHeading}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ChanceRain.defaultProps = {
  time: '',
  title: '',
  onPressItem: () => {},
  colorIcons: Colors.buttonYellow,
};

export default ChanceRain;
