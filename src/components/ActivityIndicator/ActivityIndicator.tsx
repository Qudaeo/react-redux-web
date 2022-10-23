import styles from './ActivityIndicator.module.css';

const ActivityIndicator = () => (
  <div className={styles.absolute}>
    <div className={styles.lds_facebook}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default ActivityIndicator;
