import {put, call} from 'redux-saga/effects';
import WeatherHourlyActions from '../Redux/WeatherHourlyRedux';
import WeatherActions from '../Redux/WeatherRedux';
import {mapDates} from '../Screens/Beranda/Home/Home.mapper';

export function* getDataWeather(api, {payload}) {
  try {
    yield put(
      WeatherActions.setLoadingWeather({
        loading: true,
        error: false,
        actionType: payload.actionType,
      }),
    );
    var response = yield call(api.currWeather, payload);
    const {ok, data, status} = response;
    if (ok && status === 200) {
      yield put(WeatherHourlyActions.setWeatherHourlyReq({actionType: 'load'}));
      yield put(
        WeatherActions.succesFetchWeather({
          data: data,
          actionType: payload.actionType,
        }),
      );
    } else {
      yield put(WeatherActions.errorFetchWeather({message: 'error'}));
    }
  } catch (err) {
    console.log('error getDataWeather');
    yield put(WeatherActions.errorFetchWeather({message: 'error'}));
  }
}

export function* getDataWeatherHourly(api, {payload}) {
  try {
    yield put(
      WeatherHourlyActions.setLoadingWeatherHourly({
        loading: true,
        error: false,
        actionType: payload.actionType,
      }),
    );
    var response = yield call(api.currWeatherHourly, payload);
    const {ok, data, status} = response;
    if (ok && status === 200) {
      var listWeather = mapDates(data?.list ?? []);
      yield put(
        WeatherHourlyActions.succesFetchWeatherHourly({
          data: data,
          actionType: payload.actionType,
          dailyForecast: listWeather,
        }),
      );
    } else {
      yield put(
        WeatherHourlyActions.errorFetchWeatherHourly({message: 'error'}),
      );
    }
  } catch (err) {
    console.log('error getDataWeatherHourly');
    yield put(WeatherHourlyActions.errorFetchWeatherHourly({message: 'error'}));
  }
}
