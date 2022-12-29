import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../../Themes';
import {ScreenWidth} from '../../../../../Transforms';

const ImageWidth = ScreenWidth * 0.5;

export default StyleSheet.create({
  container: {
    width: ImageWidth,
    backgroundColor: Colors.background,
    borderRadius: 10,
    paddingVertical: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 0.3,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
  },
  heading: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.black,
  },
  subHeading: {
    fontSize: Fonts.size.mini,
    fontFamily: Fonts.type.medium,
    marginTop: 5,
    color: Colors.greyText,
  },
});
