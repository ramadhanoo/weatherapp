import React from 'react';
import styles from './Home.styles';
import {useHome} from './useHome';
import {BaseScreens} from '../../../Components/index';
import {Text} from 'react-native';

const Home = props => {
  const {state, actions} = useHome();
  const {actionsData, onRefresh, openCart} = actions;
  const {themes} = state;

  return (
    <BaseScreens
      safeAreaColor={themes.backgroundColor}
      style={styles.container}>
      <Text>Hahahaha</Text>
    </BaseScreens>
  );
};

Home.options = {
  topBar: {
    visible: false,
  },
};

export default Home;
