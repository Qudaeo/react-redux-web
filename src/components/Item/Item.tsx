import styles from './Item.module.css';
import {IItem} from '../../types/items';
import {toRUB} from '../../services/locale';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../navigation/routes';

interface IProps {
  item: IItem;
}

const Item = ({item}: IProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img alt={item.name} src={item.image_mini} draggable={'false'} />
        <div className={styles.name}>{item.name}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <div className={styles.price}>{toRUB(item.price / 100)}</div>
      <div
        className={styles.hoverArea}
        onClick={() => {
          navigate(AppRoute.Details + `/${item.id}`);
        }}></div>
    </div>
  );
};

export default Item;
