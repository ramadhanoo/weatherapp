import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';
import {useEffect} from 'react';

export const useHome = () => {
  const dispatch = useDispatch();
  const themeSelector = useSelector(state => state.theme);
  const themes = useSelector(ThemeSelectors.getColors);
  const sampleRedux = useSelector(state => state.sample);

  useEffect(() => {}, [dispatch]);

  const actionsData = data => {
    console.log('haloo', sampleRedux);
  };
  const onRefresh = () => {};

  const openCart = () => {
    NavigationServices.showModal('cart.cart');
  };

  return {
    state: {
      themes,
      sampleRedux,
    },
    actions: {
      actionsData,
      onRefresh,
      openCart,
    },
    data: {},
  };
};
