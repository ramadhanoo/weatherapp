import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ThemeSelectors} from '../../Redux/ThemeRedux';
import {useSelector} from 'react-redux';
import {Colors} from '../../Themes';
import styling from './BaseScreens.styles';

export const BaseScreens = React.forwardRef(({children, ...props}, ref) => {
  const themes = useSelector(ThemeSelectors.getColors);
  const isDark = useSelector(state => state.theme.dark);
  const styles = styling(props, themes);
  const {transparent} = props;

  console.tron.log('asasa', props);

  return (
    <View style={styles.boxContainer}>
      {transparent === false ? <SafeAreaView style={styles.container} /> : null}
      <View {...props}>{children}</View>
    </View>
  );
});

BaseScreens.defaultProps = {
  safeAreaColor: Colors.white,
  transparent: false,
};
