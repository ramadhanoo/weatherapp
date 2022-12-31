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
    alignItems: 'center',
    paddingTop: 40,
  },
  containerDetail: {
    width: ScreenWidth,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: Colors.whiteBlur,
  },
  styleText: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.semibold,
    color: Colors.white,
  },
  styleText2: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.semibold,
    color: Colors.mainColor,
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  containerRowDetail: {
    flexDirection: 'row',
    width: ScreenWidth,
    alignItems: 'center',
    marginTop: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  tempTitle: {
    fontSize: Fonts.size.h1,
    color: Colors.white,
    marginLeft: 8,
  },
  tempTitle2: {
    fontSize: Fonts.size.h1,
    color: Colors.mainColor,
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
  iconsTemp2: {
    top: 5,
    width: Fonts.size.h1 * 0.3,
    height: Fonts.size.h1 * 0.3,
    borderRadius: 20,
    borderColor: Colors.mainColor,
    borderWidth: 2,
  },
  containerSuhu: {
    flexDirection: 'row',
    padding: 7,
  },
  tmpTextStyles: {
    marginLeft: 3,
  },
  statusText: {
    fontSize: Fonts.size.small,
    color: Colors.white,
    fontFamily: Fonts.type.medium,
    marginTop: 10,
  },
  statusText2: {
    fontSize: Fonts.size.small,
    color: Colors.mainColor,
    fontFamily: Fonts.type.medium,
    marginTop: 10,
  },
  fontStyleHeader: {
    fontFamily: Fonts.type.bold,
    color: Colors.mainColor,
  },
  buttonStyleBack: {
    padding: 5,
  },
});
