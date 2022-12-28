import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './Header.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts, Images} from '../../Themes';

export const HeaderHome = props => {
  const {title, onClickLeftIcon, headerStyles} = props;

  return (
    <View style={[styles.headerTop, headerStyles]}>
      <View style={styles.buttonLeft}>
        <View style={styles.cardLeft}>
          <Ionicons
            name="ios-reorder-three-outline"
            size={Fonts.size.h1}
            color={Colors.mainColor}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={onClickLeftIcon}
        activeOpacity={0.8}
        style={styles.buttonRight}>
        <View style={styles.buttonRight}>
          <Image source={Images.profile} style={styles.profileSquare} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

HeaderHome.defaultProps = {
  text: '',
  onClickLeftIcon: () => {},
  headerStyles: {},
};
