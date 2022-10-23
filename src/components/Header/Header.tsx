import styles from './Header.module.css';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {appExit} from '../../redux/slices/authSlice';
import {AppRoute} from '../../base/routes';

const Header = () => {
  const {isAuth, user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const onExit = () => {
    dispatch(appExit());
    navigate(AppRoute.Login);
  };

  return (
    <div className={styles.header}>
      <Link to={'/'}>
        <Logo className={styles.logo} width={50} height={50} />
      </Link>
      <div className={styles.header_buttons}>
        {isAuth ? (
          <>
            {user.name && (
              <div className={styles.header_button}>{user.name}</div>
            )}
            <div className={styles.header_button} onClick={onExit}>
              Exit
            </div>
          </>
        ) : (
          <>
            <Link className={styles.header_button} to={'/login'}>
              Login
            </Link>
            <Link className={styles.header_button} to={'/signup'}>
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
