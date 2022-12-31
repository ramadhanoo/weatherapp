import {useSelector, useDispatch} from 'react-redux';
import {ThemeSelectors} from '../../../Redux/ThemeRedux';
import NavigationServices from '../../../Navigation/NavigationServices';

export const useModalLocations = () => {
  const dispatch = useDispatch();
  const themes = useSelector(ThemeSelectors.getColors);

  const actionsData = data => {};
  const onRefresh = () => {};

  const dismisModal = () => {
    NavigationServices.dismissModal();
  };

  return {
    state: {
      themes,
    },
    actions: {
      actionsData,
      onRefresh,
      dismisModal,
    },
    data: {},
  };
};
