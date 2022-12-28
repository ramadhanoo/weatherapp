import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  setWeatherReq: ['payload'],
});

export const WeatherTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: [],
  loading: false,
  isRefresh: false,
  error: false,
  message: '',
  actionType: 'refresh',
};

/* ------------- Selectors ------------- */

export const WeatherSelectors = {
  getData: state => state.weather.data,
};

/* ------------- Reducers ------------- */

export const setWeatherReqReducer = (state, {payload}) => ({
  ...state,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WEATHER_REQ]: setWeatherReqReducer,
});
