import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import WeatherActions from '../../../Redux/WeatherRedux';
import WeatherHourlyActions from '../../../Redux/WeatherHourlyRedux';
import {useEffect} from 'react';

export const useHome = () => {
  const dispatch = useDispatch();
  const themeSelector = useSelector(state => state.theme);
  const themes = useSelector(ThemeSelectors.getColors);
  const sampleRedux = useSelector(state => state);

  useEffect(() => {
    dispatch(WeatherActions.setWeatherReq({actionType: 'load'}));
    // dispatch(WeatherHourlyActions.setWeatherHourlyReq());
  }, []);

  const actionsData = data => {
    console.log('haloo', sampleRedux);
  };

  const onPressDetail = () => {
    // console.tron.log('hahah', sampleRedux);
  };

  return {
    state: {
      themes,
      sampleRedux,
    },
    actions: {
      actionsData,
      onPressDetail,
    },
    data: {},
  };
};
