import styles from './Item.module.css';
import {IItem} from '../../types/items';
import {toRUB} from '../../services/locale';

interface IProps {
  item: IItem;
}

const Item = ({item}: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img alt={item.name} src={item.image_mini} draggable={'false'} />
        <div className={styles.name}>{item.name}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <div className={styles.price}>{toRUB(item.price / 100)}</div>
    </div>
  );
};

export default Item;
