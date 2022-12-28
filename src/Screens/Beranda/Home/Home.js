import React from 'react';
import styles from './Home.styles';
import {useHome} from './useHome';
import {BaseScreens, Header} from '../../../Components/index';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Themes';

const Home = props => {
  const {state, actions} = useHome();
  const {actionsData, onRefresh, openCart, onPressDetail} = actions;
  const {themes} = state;

  return (
    <BaseScreens
      safeAreaColor={Colors.white}
      transparent={true}
      style={styles.container}>
      <ScrollView>
        <Header status={'testinggg'} />
        <TouchableOpacity
          onPress={onPressDetail}
          style={{width: 100, height: 30, backgroundColor: 'red'}}>
          <Text>Hahahah</Text>
        </TouchableOpacity>
      </ScrollView>
    </BaseScreens>
  );
};

Home.options = {
  topBar: {
    visible: false,
  },
};

export default Home;
