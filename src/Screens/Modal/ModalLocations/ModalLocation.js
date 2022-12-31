import React from 'react';
import styles from './ModalLocations.styles';
import {useModalLocations} from './useModalLocations';
import {BaseScreenModal, BaseScreens} from '../../../Components/index';
import {Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../../Themes';
import {LOCATIONS} from '../../../Data/Constans';

const ModalLocations = props => {
  const {state, actions} = useModalLocations();
  const {dismisModal} = actions;
  const {themes} = state;

  return (
    <BaseScreenModal onPressBackdrop={dismisModal} style={styles.container}>
      <View style={styles.box}>
        {LOCATIONS.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.card}>
              <Text style={styles.title}>{item.negara}</Text>
              <Text style={styles.subTitleText}>{item.subTitle}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </BaseScreenModal>
  );
};

ModalLocations.options = {
  topBar: {
    visible: false,
  },
  modalPresentationStyle: 'overCurrentContext',
  layout: {
    backgroundColor: 'transparent',
    componentBackgroundColor: 'transparent',
  },
};

export default ModalLocations;
