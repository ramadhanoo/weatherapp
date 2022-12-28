import {takeLatest, all, takeEvery} from 'redux-saga/effects';

/* ------------- Types ------------- */
import Api from '../Services/Api';

import {StartupTypes} from '../Redux/StartupRedux';
import {WeatherTypes} from '../Redux/WeatherRedux';
import {WeatherHourlyTypes} from '../Redux/WeatherHourlyRedux';

import {startup} from './StartupSagas';
import {getDataWeather, getDataWeatherHourly} from './WeatherSagas';
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = Api.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(WeatherTypes.SET_WEATHER_REQ, getDataWeather, api),
    takeLatest(
      WeatherHourlyTypes.SET_WEATHER_HOURLY_REQ,
      getDataWeatherHourly,
      api,
    ),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(SampleTypes.SAMPLE_REQUEST, SampleAction)
  ]);
}
