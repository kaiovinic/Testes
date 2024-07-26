import { render, screen } from "@testing-library/react";
import Login from ".";

describe("Testa o component Login", () => {
  test("Deve haver dois título escrito 'Sing In'", async () => {
    render(<Login />);

    const title = await screen.findByRole("heading", {
      name: "Sing In",
    });

    expect(title).toBeInTheDocument();
  });

  test("Devem haver dois inputs na minha tela", async () => {
    render(<Login />);

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(2);
  });

  test("Devem haver um botão na minha tela", async () => {
    render(<Login />);

    const botao = await screen.findByRole("button");

    expect(botao.textContent).toBe("Login");
  });

  test("Deve haver um input para e-mail", async () => {
    render(<Login />);
    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");
    expect(inputEmail).toBeInTheDocument();
  });

  test("Deve haver um input para senha", async () => {
    render(<Login />);
    const inputSenha = await screen.findByPlaceholderText("Insira seu e-mail");
    expect(inputSenha).toBeInTheDocument();
  });
});
