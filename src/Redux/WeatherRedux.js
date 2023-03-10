import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setWeatherReq: ['payload'],
  succesFetchWeather: ['payload'],
  errorFetchWeather: ['payload'],
  setLoadingWeather: ['payload'],
});

export const WeatherTypes = Types;
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

export const WeatherSelectors = {
  getData: state => state.weather.data,
};

/* ------------- Reducers ------------- */

export const setWeatherReqReducer = (state, {payload}) => ({
  ...state,
});

export const succesFetchWeatherReducer = (state, {payload}) => ({
  ...state,
  data: payload?.data ?? null,
  loading: false,
  error: false,
  isRefresh: false,
  message: '',
});

export const errorFetchWeatherReducer = (state, {payload}) => ({
  ...state,
  data: null,
  loading: false,
  isRefresh: false,
  error: true,
  message: '',
});

export const setLoadingWeatherReducer = (state, {payload}) => ({
  ...state,
  loading: payload?.actionType === 'refresh' ? false : payload.loading,
  error: payload.error,
  isRefresh: payload?.actionType === 'refresh' ? payload.loading : false,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WEATHER_REQ]: setWeatherReqReducer,
  [Types.SUCCES_FETCH_WEATHER]: succesFetchWeatherReducer,
  [Types.ERROR_FETCH_WEATHER]: errorFetchWeatherReducer,
  [Types.SET_LOADING_WEATHER]: setLoadingWeatherReducer,
});
