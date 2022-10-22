import styles from './Login.module.css';

const Login = () => (
  <div className={styles.container}>
    <form>
      <h2>Login</h2>
      <input
        className={styles.input}
        type={'email'}
        name={'email'}
        placeholder={'Email'}
        required
      />
      <input
        className={styles.input}
        type={'password'}
        name={'password'}
        placeholder={'Password'}
        required
      />
      <input
        className={styles.input}
        type={'button'}
        value={'LOGIN'}
        onClick={() => {
          console.log('login');
        }}
      />
    </form>
  </div>
);

export default Login;
