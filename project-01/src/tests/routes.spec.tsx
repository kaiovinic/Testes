import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainRoutes from "../routes";

describe("Testa o componente MainRoutes", () => {
  test("Deve renderizar a página de login", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByText("Sing In");
    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar a página de cadastro", async () => {
    render(
      <MemoryRouter initialEntries={["/sing-up"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Sign Up", // Certifique-se de que o texto está correto
    });

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar a página de dashboard", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByText("Dashboard");
    expect(title).toBeInTheDocument();
  });
});
