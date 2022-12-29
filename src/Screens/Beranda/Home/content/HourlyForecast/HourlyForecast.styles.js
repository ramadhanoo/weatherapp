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
  cardHidden: {
    width: '95%',
    paddingVertical: 10,
    marginTop: 10,
    borderColor: Colors.background,
    borderTopWidth: 1,
    alignSelf: 'center',
  },
  containerWind: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardWind: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: Fonts.size.mini,
    color: Colors.greyText,
    marginTop: 8,
    fontFamily: Fonts.type.medium,
  },
  textSubtitle: {
    marginTop: 8,
  },
  forecasDailyContainer: {
    width: '100%',
    paddingTop: 20,
    backgroundColor: Colors.white,
  },
  containerCardVertical: {
    paddingVertical: 5,
    paddingHorizontal: ScreenWidth * 0.04,
    alignItems: 'center',
  },
  dayLoading: {
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 100,
    backgroundColor: Colors.background,
    marginRight: 10,
  },
  containerCard: {
    flexDirection: 'row',
    borderColor: Colors.background,
    borderTopWidth: 1,
    paddingLeft: 10,
  },
});
