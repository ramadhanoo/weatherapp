import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setWeatherHourlyReq: ['payload'],
  succesFetchWeatherHourly: ['payload'],
  errorFetchWeatherHourly: ['payload'],
  setLoadingWeatherHourly: ['payload'],
});

export const WeatherHourlyTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: null,
  loading: false,
  isRefresh: false,
  error: false,
  message: '',
  actionType: 'refresh', //refresh || load
};

/* ------------- Selectors ------------- */

export const WeatherHourlySelectors = {
  getData: state => state.weatherHourly.data,
};

/* ------------- Reducers ------------- */

export const setWeatherHourlyReqReducer = state => ({
  ...state,
});

export const succesFetchWeatherHourlyReducer = (state, {payload}) => ({
  ...state,
  data: payload?.data ?? null,
  loading: false,
  error: false,
  isRefresh: false,
  message: '',
});

export const errorFetchWeatherHourlyReducer = (state, {payload}) => ({
  ...state,
  data: null,
  loading: false,
  isRefresh: false,
  error: true,
  message: '',
});

export const setLoadingWeatherHourlyReducer = (state, {payload}) => ({
  ...state,
  loading: payload?.actionType === 'refresh' ? false : payload.loading,
  error: payload.error,
  isRefresh: payload?.actionType === 'refresh' ? payload.loading : false,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WEATHER_HOURLY_REQ]: setWeatherHourlyReqReducer,
  [Types.SUCCES_FETCH_WEATHER_HOURLY]: succesFetchWeatherHourlyReducer,
  [Types.ERROR_FETCH_WEATHER_HOURLY]: errorFetchWeatherHourlyReducer,
  [Types.SET_LOADING_WEATHER_HOURLY]: setLoadingWeatherHourlyReducer,
});
