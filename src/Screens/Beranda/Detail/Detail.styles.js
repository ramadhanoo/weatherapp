import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

export default StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.background,
  },
  containerSettings: {
    alignItems: 'center',
    marginTop: 20,
  },
  textTitle: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.medium,
    alignSelf: 'flex-start',
    marginLeft: 22,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    width: ScreenWidth * 0.9,
    borderRadius: 20,
    paddingVertical: 13,
    backgroundColor: Colors.activeColor,
  },
  textButton: {
    fontSize: Fonts.size.sub_small,
    fontFamily: Fonts.type.medium,
  },
});
