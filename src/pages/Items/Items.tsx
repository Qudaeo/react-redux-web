import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import styles from './Items.module.css';
import {useEffect, useState} from 'react';
import {getItems, setCurrentPage} from '../../redux/slices/itemsSlice';
import Item from '../../components/Item/Item';
import {getToken, Token} from '../../services/localStorage';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../base/routes';
import {setAuth} from '../../redux/slices/authSlice';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import Paginator from '../../components/Paginator/Paginator';

const Items = () => {
  const {currentPage, lastPage, pageLoading, items} = useSelector(
    (state: RootState) => state.items
  );
  const {isAuth} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const [showedPage, setShowedPage] = useState(currentPage);

  useEffect(() => {
    if (items[currentPage]) {
      setShowedPage(currentPage);
    }
  }, [items[currentPage]]);

  useEffect(() => {
    if (getToken(Token.access_token)) {
      dispatch(setAuth({isAuth: true}));
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      if (!pageLoading[currentPage] && !items[currentPage]) {
        dispatch(getItems(currentPage));
      }
    } else {
      navigate(AppRoute.Login);
    }
  }, [isAuth, currentPage]);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage({page}));
  };

  return (
    <>
      <Paginator
        currentPage={showedPage}
        pagesCount={lastPage}
        onChangePage={onChangePage}
      />
      <div className={styles.container}>
        {items[showedPage]?.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      {pageLoading[currentPage] && <ActivityIndicator />}
    </>
  );
};

export default Items;
