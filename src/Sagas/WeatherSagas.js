import {put, call} from 'redux-saga/effects';
import JokesActions, {JokesSelectors} from '../Redux/JokesRedux';
import {error} from '../Components/index';
import {Alert} from 'react-native';

export function* getDataWeather(api, {payload}) {
  try {
    var response = yield call(api.jokesApi, payload);
    const {ok, data, status} = response;
    // if (ok && status === 200) {
    //   yield put(JokesActions.succesFetchJokes({actionType: payload.actionType}),);
    // } else {
    //   yield put(JokesActions.errorFetchJokes({message: 'error'}));
    // }
  } catch (err) {
    console.log('error getDataWeather');
    // yield put(JokesActions.errorFetchJokes({message: 'error'}));
  }
}
