import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import styles from './Items.module.css';
import {useEffect} from 'react';
import {getItems} from '../../redux/slices/itemsSlice';
import Item from '../../components/Item/Item';

const Items = () => {
  const items = useSelector((state: RootState) => state.items.items);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log('i fire once');
    dispatch(getItems());
  }, []);

  return (
    <div className={styles.container}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
