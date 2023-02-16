import {useNavigation} from '@react-navigation/native';

const useSignInNavigation = () => {
  const navigation = useNavigation<SignIntackNavigatorProp>();

  return navigation;
};
export default useSignInNavigation;
