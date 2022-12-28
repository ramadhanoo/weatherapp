import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../../Transforms';

const Height_Header = ScreenHeight * 0.4;

export default StyleSheet.create({
  container: {
    width: ScreenWidth,
    height: Height_Header,
    backgroundColor: Colors.mainColor,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: Colors.whiteBlur,
  },
  styleText: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.semibold,
    color: Colors.white,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempTitle: {
    fontSize: Fonts.size.h1,
    color: Colors.white,
    marginLeft: 8,
  },
  containerTemp: {
    flexDirection: 'row',
  },
  iconsTemp: {
    top: 5,
    width: Fonts.size.h1 * 0.3,
    height: Fonts.size.h1 * 0.3,
    borderRadius: 20,
    borderColor: Colors.white,
    borderWidth: 2,
  },
});
