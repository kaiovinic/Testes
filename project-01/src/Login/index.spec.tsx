import { fireEvent, render, screen } from "@testing-library/react";
import Login from ".";

const navigateMock = vi.fn();

describe("Testa o component Login", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
  }));

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

  test("Deve haver um input para senha", async () => {
    render(<Login />);

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
