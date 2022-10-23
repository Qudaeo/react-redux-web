import styles from './Details.module.css';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useNavigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../base/routes';
import {toRUB} from '../../services/locale';
import {useEffect} from 'react';

const Details = () => {
  const {currentPage, items} = useSelector((state: RootState) => state.items);
  const navigate = useNavigate();

  const {itemId} = useParams();
  const currentItem = items[currentPage]?.find(
    item => item.id === +(itemId || 0)
  );

  useEffect(() => {
    if (!itemId || !currentItem) {
      navigate(AppRoute.Items);
    }
  }, []);

  if (!itemId || !currentItem) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.item_container}>
        <div className={styles.item}>
          <img
            alt={currentItem.name}
            src={currentItem.image}
            draggable={'false'}
          />
          <div className={styles.name}>{currentItem.name}</div>
          <div className={styles.description}>{currentItem.description}</div>
        </div>
        <div className={styles.price}>{toRUB(currentItem.price / 100)}</div>
      </div>
    </div>
  );
};

export default Details;
