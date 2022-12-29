import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {ScreenWidth} from '../../../../../Transforms';

const ImageWidth = ScreenWidth * 0.5;

export default StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    borderRadius: 10,
    paddingVertical: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 0.3,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
  },
  heading: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.bold,
    color: Colors.greyText,
    marginBottom: 8,
  },
  subHeading: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.bold,
    marginTop: 8,
    color: Colors.greyText,
    marginBottom: 8,
  },
  tmpStyles: {
    marginLeft: 0,
    fontFamily: Fonts.type.semibold,
  },
});
