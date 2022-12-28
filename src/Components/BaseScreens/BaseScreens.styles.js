import {StyleSheet} from 'react-native';

const styling = (props, themes) =>
  StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor:
        props.transparent === true ? 'transparent' : props.safeAreaColor,
    },
    boxContainer: {
      flex: 1,
    },
  });

export default styling;
