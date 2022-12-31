import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import StartupActions from '../../Redux/StartupRedux';
import REDUX_PERSIST from '../../Config/ReduxPersist';

export const useWelcomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  return {
    state: {},
    actions: {},
    data: {},
  };
};
