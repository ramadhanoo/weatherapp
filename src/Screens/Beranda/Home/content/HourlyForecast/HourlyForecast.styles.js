import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {ScreenWidth} from '../../../../../Transforms';

const ImageWidth = ScreenWidth * 0.5;

export default StyleSheet.create({
  container: {
    width: ScreenWidth * 0.9,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingVertical: 15,
    marginRight: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textContainer: {
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.bold,
    color: Colors.greyText,
  },
  title: {
    fontSize: Fonts.size.sub_small,
    fontFamily: Fonts.type.bold,
    color: Colors.black,
  },
  subTitle: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.semibold,
    color: Colors.greyText,
    marginTop: 3,
  },
  tmpStyles: {
    marginLeft: 0,
    fontFamily: Fonts.type.semibold,
  },
  containerOne: {
    paddingRight: 15,
  },
  containerTwo: {
    flex: 0.5,
  },
  containerThree: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
  containerSuhu: {
    flexDirection: 'row',
    padding: 7,
  },
  tmpTextStyles: {
    marginLeft: 3,
    fontFamily: Fonts.type.medium,
  },
});
