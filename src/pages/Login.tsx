import styles from './Login.module.css';

interface IProps {
  type: 'login' | 'signup';
}

const Login = ({type}: IProps) => {
  return (
    <div className={styles.container}>
      <form>
        {type === 'login' && <h2>Login</h2>}
        {type === 'signup' && <h2>Sign up</h2>}
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
        {type === 'login' && (
          <input
            className={styles.input}
            type={'button'}
            value={'LOGIN'}
            onClick={() => {
              console.log('login');
            }}
          />
        )}
        {type === 'signup' && (
          <input
            className={styles.input}
            type={'button'}
            value={'SIGN UP'}
            onClick={() => {
              console.log('signup');
            }}
          />
        )}
      </form>
    </div>
  );
};

export default Login;
