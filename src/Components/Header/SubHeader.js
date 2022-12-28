import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.styles';

export const SubHeader = props => {
  const {title, subTitle, subHeaderStyle} = props;

  return (
    <View style={[styles.containerSubHeader, subHeaderStyle]}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textSubTitle}>{subTitle}</Text>
    </View>
  );
};

SubHeader.defaultProps = {
  title: 'Halo Dio',
  subTitle: 'Welcome to your smart home',
  subHeaderStyle: {},
};
