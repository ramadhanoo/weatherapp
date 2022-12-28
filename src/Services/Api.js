// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import {BASE_URL, Host} from '../Data/Constans';
import querystring from 'querystring';

// our "constructor"
const create = (baseURL = BASE_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //

  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 30000,
  });

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const getRoot = () => api.get('');

  // Auth
  const login = body =>
    api.post('/token', querystring.stringify(body), {
      headers: {
        Host: Host,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  const loginUrlApi = body =>
    api.post('/token', querystring.stringify(body), {});
  const getCoffe = dataReq =>
    api.get(
      '/coffee/hot',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
  const jokesApi = ({type}) =>
    api.get(
      `/wines/${type}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

  const jokesDetailApi = ({desc, amount}) =>
    api.get(
      `/joke/${desc}?type=single&amount=${amount}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    login,
    loginUrlApi,
    getRoot,
    getCoffe,
    jokesApi,
    jokesDetailApi,
    api,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
