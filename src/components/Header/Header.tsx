import styles from './Header.module.css';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={'/'}>
        <Logo className={styles.logo} width={50} height={50} />
      </Link>
      <div className={styles.header_buttons}>
        <Link className={styles.header_button} to={'/login'}>
          Login
        </Link>
        <Link className={styles.header_button} to={'/signup'}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
