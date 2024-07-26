import styles from "./styles.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <h2>Sing In</h2>

      <form>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
