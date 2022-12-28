import React from 'react';
import {View, Text, Image} from 'react-native';
import {useAppstack} from './useAppstack';
import {Colors, Images} from '../../Themes';
import {BaseScreens} from '../../Components/index';
import styles from './Appstack.styles';

const Appstack = props => {
  const {state, actions} = useAppstack();
  const {} = actions;
  const {} = state;

  return (
    <BaseScreens style={styles.body}>
      <Image source={Images.coffe1} style={styles.container} />
    </BaseScreens>
  );
};

Appstack.options = {
  topBar: {
    visible: false,
  },
};

export default Appstack;
