import { useDispatch } from 'react-redux';
import { setEmail, setToken } from '../redux/reducer';
import { AppDispatch } from '../redux/store';

export const useAuth = () => {
  const dispatch : AppDispatch = useDispatch();

  const dispatchSetEmail = (email: string) => {
    dispatch(setEmail(email));
  };

  const dispatchSetToken = (token: string) => {
    dispatch(setToken(token));
  };

  return {
    dispatchSetEmail,
    dispatchSetToken
  };
};