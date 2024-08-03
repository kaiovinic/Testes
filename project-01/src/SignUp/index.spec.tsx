import { render, screen } from "@testing-library/react";

import SignUp from "./index";

const navigateMock = vi.fn();

describe("Testa o component SignUp", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
  }));

  test("Devem haver 3 inputs na minha tela", async () => {
    render(<SignUp />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });

  test("Devem haver inputs para nome, email e senha", async () => {
    render(<SignUp />);

    const inputName = await screen.findByPlaceholderText("Insira seu nome");
    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");
    const inputPassword = await screen.findByPlaceholderText(
      "Insira sua senha"
    );

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  test("Devem haver um botão na tela", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Sing up");
  });

  test("Devem haver um título 'Casdastre-se'", async () => {
    render(<SignUp />);

    const title = await screen.findByRole("heading", {
      level: 1,
    });

    expect(title).toHaveTextContent("Cadrastre-se");
  });

  test("Deve navegar para página de dashboard", async () => {
    render(<SignUp />);

    const button = await screen.findByRole("button");
    button.click();

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
