import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../redux/slices/authSlice';
import {RootState} from '../redux/store';
import styles from './Login.module.css';

interface IProps {
  type: 'login' | 'signup';
}

const Login = ({type}: IProps) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <form>
        {type === 'login' && <h2>Login</h2>}
        {type === 'signup' && <h2>Sign up</h2>}
        <input
          className={styles.input}
          type={'email'}
          name={'email'}
          placeholder={'Email'}
          value={user.email}
          onChange={e => {
            dispatch(
              setUser({email: e.currentTarget.value, password: user.password})
            );
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
            dispatch(
              setUser({email: user.email, password: e.currentTarget.value})
            );
          }}
          required
        />
        {type === 'login' && (
          <input
            className={styles.input}
            type={'button'}
            value={'LOGIN'}
            onClick={() => {
              console.log('login');
            }}
          />
        )}
        {type === 'signup' && (
          <input
            className={styles.input}
            type={'button'}
            value={'SIGN UP'}
            onClick={() => {
              console.log('signup');
            }}
          />
        )}
      </form>
    </div>
  );
};

export default Login;
