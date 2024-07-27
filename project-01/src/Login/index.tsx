import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <h2>Sing In</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
