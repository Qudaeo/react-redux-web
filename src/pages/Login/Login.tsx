import {useDispatch, useSelector} from 'react-redux';
import {login, registration, setUser} from '../../redux/slices/authSlice';
import {AppDispatch, RootState} from '../../redux/store';
import styles from './Login.module.css';
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {AppRoute} from '../../base/routes';

interface IProps {
  type: 'login' | 'signup';
}

const Login = ({type}: IProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(AppRoute.Items);
    }
  }, [isAuth]);

  return (
    <div className={styles.container}>
      <form>
        {type === 'login' && <h2>Login</h2>}
        {type === 'signup' && (
          <>
            <h2>Sign up</h2>
            <input
              className={styles.input}
              type={'name'}
              name={'name'}
              placeholder={'Name'}
              value={user.name}
              onChange={e => {
                dispatch(setUser({...user, name: e.currentTarget.value}));
              }}
              required
            />
          </>
        )}
        <input
          className={styles.input}
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          value={user.email}
          onChange={e => {
            dispatch(setUser({...user, email: e.currentTarget.value}));
          }}
          required
        />
        <input
          className={styles.input}
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          value={user.password}
          onChange={e => {
            dispatch(setUser({...user, password: e.currentTarget.value}));
          }}
          required
        />
        {type === 'login' && (
          <input
            className={styles.input}
            type={'button'}
            value={'LOGIN'}
            onClick={() => {
              dispatch(login({email: user.email, password: user.password}));
            }}
          />
        )}
        {type === 'signup' && (
          <input
            className={styles.input}
            type={'button'}
            value={'SIGN UP'}
            onClick={() => {
              dispatch(
                registration({
                  email: user.email,
                  name: user.name,
                  password: user.password,
                })
              );
            }}
          />
        )}
      </form>
    </div>
  );
};

export default Login;
