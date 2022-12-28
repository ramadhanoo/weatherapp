import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Themes';
import {ScreenHeight} from '../../../Transforms';

export default StyleSheet.create({
  container: {
    flex: 1,
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
});
