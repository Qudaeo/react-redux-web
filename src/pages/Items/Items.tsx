import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import styles from './Items.module.css';
import {useEffect} from 'react';
import {getItems} from '../../redux/slices/itemsSlice';
import Item from '../../components/Item/Item';
import {getToken, Token} from '../../services/localStorage';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../base/routes';
import {setAuth} from '../../redux/slices/authSlice';

const Items = () => {
  const {currentPage, pageLoading, items} = useSelector(
    (state: RootState) => state.items
  );
  const {isAuth} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    if (getToken(Token.access_token)) {
      dispatch(setAuth({isAuth: true}));
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      if (!pageLoading[currentPage]) {
        dispatch(getItems(currentPage));
      }
    } else {
      navigate(AppRoute.Login);
    }
  }, [isAuth]);

  return (
    <div className={styles.container}>
      {items[currentPage]?.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
