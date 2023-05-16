import "./styles.css";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPostcardFill } from "react-icons/bs";

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
            <Input
              title="Nome Completo"
              type="text"
              placeholder="Nome"
              icon={<BsPersonCircle className="icon" />}
            />
            <Input
              title="Email"
              type="email"
              placeholder="Email"
              icon={<BsEnvelopeFill className="icon" />}
            />
            <Input
              title="CPF"
              type="text"
              placeholder="000.000.000-00"
              icon={<BsPersonVcardFill className="icon" />}
            />
            <Input
              title="Telefone"
              type="tel"
              placeholder="00 00000-0000"
              icon={<BsTelephoneFill className="icon" />}
            />
            <Input
              title="Carteira de Motorista"
              type="text"
              placeholder="00000000000"
              icon={<BsPostcardFill className="icon" />}
            />
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
