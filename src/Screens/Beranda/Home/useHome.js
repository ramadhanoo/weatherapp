import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import WeatherActions from '../../../Redux/WeatherRedux';
import WeatherHourlyActions from '../../../Redux/WeatherHourlyRedux';
import {useEffect, useState} from 'react';

export const useHome = () => {
  const dispatch = useDispatch();
  const themeSelector = useSelector(state => state.theme);
  const themes = useSelector(ThemeSelectors.getColors);
  const sampleRedux = useSelector(state => state);
  const whRedux = useSelector(state => state.weatherHourly);
  const [activeId, setActiveId] = useState([]);
  const [activeIdTest, setActiveIdTest] = useState([]);

  useEffect(() => {
    dispatch(WeatherActions.setWeatherReq({actionType: 'load'}));
    // dispatch(WeatherHourlyActions.setWeatherHourlyReq());
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

  const onPressDetail = () => {
    // console.tron.log('hahah', sampleRedux);
  };

  return {
    state: {
      themes,
      sampleRedux,
      whRedux,
      setActiveId,
      activeId,
    },
    actions: {
      actionsData,
      onPressDetail,
    },
    data: {},
  };
};
