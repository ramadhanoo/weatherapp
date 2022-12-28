import React, {useState} from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from '../../Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './Header.styles';
import {Colors, Fonts} from '../../../Themes';

export const Header = ({status}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.8}>
        <Text style={styles.styleText}>
          <AntDesign name="star" color={Colors.white} /> {'  '}
          London UK
        </Text>
      </TouchableOpacity>
      <View style={styles.containerRow}>
        <Fontisto name="day-cloudy" color={Colors.white} size={Fonts.size.h1} />
        <View style={styles.containerTemp}>
          <Text style={styles.tempTitle}>19</Text>
          <View style={styles.iconsTemp}></View>
        </View>
      </View>
      <Text>{status}</Text>
    </View>
  );
};

Header.defaultProps = {
  status: '',
};
