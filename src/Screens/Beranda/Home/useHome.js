import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import WeatherActions from '../../../Redux/WeatherRedux';
import WeatherHourlyActions from '../../../Redux/WeatherHourlyRedux';
import {useEffect, useState} from 'react';
import moment from 'moment';
import {mapDates} from './Home.mapper';

export const useHome = () => {
  const dispatch = useDispatch();
  const themeSelector = useSelector(state => state.theme);
  const themes = useSelector(ThemeSelectors.getColors);
  const whRedux = useSelector(state => state.weatherHourly);
  const weatherRedux = useSelector(state => state.weather);
  const [activeId, setActiveId] = useState([]);
  const [activeIdTest, setActiveIdTest] = useState([]);

  useEffect(() => {
    dispatch(WeatherActions.setWeatherReq({actionType: 'load'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actionsData = id => {
    var data = activeId;
    if (data.indexOf(id) !== -1) {
      data.splice(data.indexOf(id), 1);
    } else {
      data.push(id);
    }
    setActiveId([...data]);
  };

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
  }

  const onPressDetail = () => {
    NavigationServices.push('home.detail');
  };

  return {
    state: {
      themes,
      whRedux,
      setActiveId,
      activeId,
      weatherRedux,
    },
    actions: {
      actionsData,
      onPressDetail,
    },
    data: {},
  };
};
