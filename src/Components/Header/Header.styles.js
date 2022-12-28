import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {scaleWithPixel, ScreenHeight, ScreenWidth} from '../../Transforms';

export default StyleSheet.create({
  container: {
    width: ScreenWidth,
    height: ScreenHeight * 0.05,
    backgroundColor: Colors.mainColor,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  text: {
    ...Fonts.style.inputBoldWhite,
    color: Colors.white,
  },
  textHeader: {
    color: Colors.black,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h3,
  },
  headerTop: {
    marginTop: 20,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  buttonLeft: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  cardLeft: {
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonRight: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cardRight: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  profileSquare: {
    width: scaleWithPixel(38),
    height: scaleWithPixel(38),
    borderRadius: 10,
    backgroundColor: Colors.greyLight2,
  },
  containerSubHeader: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textTitle: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    color: Colors.mainColor,
  },
  textSubTitle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.regular,
    color: Colors.mainColor,
    marginTop: 7,
  },
});
