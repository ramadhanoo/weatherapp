import React, {useEffect} from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {useWelcomeScreen} from './useWelcomeScreen';
import {Colors, Images} from '../../Themes';
import {BaseScreens} from '../../Components/index';
import styles from './WelcomeScreen.styles';
import Lottie from 'lottie-react-native';
import StackComponent from '../../Navigation/StackComponent';

const WelcomeScreen = props => {
  const {state, actions} = useWelcomeScreen();
  const {} = actions;
  const {} = state;

  useEffect(() => {
    setTimeout(() => {
      StackComponent.setRootMain();
    }, 5000);
  }, []);

  return (
    <BaseScreens style={styles.body}>
      <Lottie source={require('../../Images/rnsplash.json')} autoPlay loop />
    </BaseScreens>
  );
};

WelcomeScreen.options = {
  topBar: {
    visible: false,
  },
};

export default WelcomeScreen;
