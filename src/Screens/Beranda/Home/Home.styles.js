import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {ScreenHeight, ScreenWidth} from '../../../Transforms';

const ImageWidth = ScreenWidth * 0.5;

export default StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.background,
  },
  listStyle: {
    paddingBottom: ScreenHeight * 0.2,
  },
  containerStyle: {
    paddingHorizontal: 20,
  },
  textColor: {
    color: Colors.greyText,
    fontFamily: Fonts.type.black,
  },
  button: {
    width: 200,
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    ...Fonts.style.inputBoldWhite,
  },
  test: {
    height: 300,
    width: 100,
  },
  styleContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  hourlyContainer: {
    width: ScreenWidth,
    paddingTop: 30,
    backgroundColor: Colors.white,
    bottom: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerCard: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: ScreenWidth * 0.04,
  },
  containerCardVertical: {
    paddingVertical: 5,
    paddingHorizontal: ScreenWidth * 0.04,
    alignItems: 'center',
  },
  loadingStyle: {
    width: ImageWidth,
    backgroundColor: Colors.background,
    borderRadius: 10,
    height: 50,
    marginRight: 10,
  },
  dailyContainer: {
    width: ScreenWidth,
    paddingVertical: 20,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 20,
  },
  forecasDailyContainer: {
    width: ScreenWidth,
    paddingTop: 30,
    backgroundColor: Colors.white,
    paddingBottom: 10,
  },
  titleDialy: {
    marginLeft: 20,
    marginBottom: 10,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.sub_small,
  },
  dayLoading: {
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 100,
    backgroundColor: Colors.background,
    marginRight: 10,
  },
});
