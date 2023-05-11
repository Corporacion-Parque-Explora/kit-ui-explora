import styles from './LoadingView.module.scss';

const LoadingView = () => (
  <div className={styles.container}>
    <div className={styles.cargando}>
      <div className={styles.pelotas}></div>
      <div className={styles.pelotas}></div>
      <div className={styles.pelotas}></div>
    </div>
  </div>
);

export default LoadingView;
