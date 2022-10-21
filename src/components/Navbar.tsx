import './Navbar.css';
import {ReactComponent as Logo} from '../assets/images/logo.svg';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={'navbar'}>
      <Link to={'/'}>
        <Logo width={50} height={50} />
      </Link>
      <div className={'navbar_buttons'}>
        <Link className={'navbar_button'} to={'/login'}>
          Login
        </Link>
        <Link className={'navbar_button'} to={'/signup'}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
