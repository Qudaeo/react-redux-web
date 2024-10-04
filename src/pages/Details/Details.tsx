import styles from './Details.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {useNavigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../navigation/routes';
import {useEffect} from 'react';
import {getCategories} from '../../redux/slices/categoriesSlice';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';

const Details = () => {
  const {currentPage, items} = useSelector((state: RootState) => state.items);
  const {categories, loading} = useSelector(
    (state: RootState) => state.categories,
  );
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const {itemId} = useParams();
  const currentItem = items[currentPage]?.find(
    item => item.id === +(itemId || 0),
  );

  useEffect(() => {
    if (!itemId || !currentItem) {
      navigate(AppRoute.Items, {replace: true});
      return;
    }

    const categoriesIds = currentItem.categories
      .map(c => c.category_id)
      .filter(id => !categories[id]);

    if (categoriesIds.length > 0) {
      dispatch(getCategories(categoriesIds));
    }
  }, []);

  if (!itemId || !currentItem) {
    return <></>;
  }

  if (loading) {
    return <ActivityIndicator />;
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
          <div className={styles.categories}>
            <div className={styles.category_text}>Categories:</div>
            {currentItem.categories.map(category => (
              <div key={category.id}>
                {categories[category.category_id]?.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
