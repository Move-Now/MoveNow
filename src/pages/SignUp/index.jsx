import "./styles.css";
import { Button } from "../../components/Button/Button";

export function SignUp() {
  const styleButtonPrimary = {
    color: "#000000",
    background: "var(--orange)",
    width: "87.5%",
    margin: "auto",
  };
  return (
    <>
      <h2 className="logo">
        Move<span>Now</span>
      </h2>

      <main>
        <h2>Cadastro de Motorista</h2>
        <form action="">
          <div className="column">
            <div className="wrapperInput">
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="wrapperInput">
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="wrapperInput">
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Nome" />
            </div>
          </div>
          <div className="column">
            <div className="wrapperInput">
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="wrapperInput">
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="wrapperInput">
              <label htmlFor="">Nome Completo</label>
              <input type="text" placeholder="Nome" />
            </div>
          </div>
        </form>
        <Button type="submit" style={styleButtonPrimary} name="Cadastrar" />
      </main>
    </>
  );
}
