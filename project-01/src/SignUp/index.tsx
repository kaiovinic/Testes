import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/dashboard");
  }
  return (
    <div className={styles.container}>
      <h1>Cadrastre-se</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira seu nome" />
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button>Sing up</button>
      </form>
    </div>
  );
}
