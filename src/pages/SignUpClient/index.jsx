import "./style.css";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { BsPersonCircle } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsPersonVcardFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
export function SignUpClient() {
    
    const styleButtonPrimary = {
        color: "#000000",
        background: "var(--orange)",
        width: "50.5%",
        margin: "auto",
    };
    const styleButtonSecundary = {
        color: "var(--orange)",
        background: "var(--bg-color-dark)",
        width: "70.5%",
        margin: "auto",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(253, 101, 0, 0.11)",
       
};
return (
    <>
        

        <main>
            <Button type="submit" style={styleButtonPrimary} name="Cadastrar" /> {/* Botão precisa ser estilizado com animação para ter a animação da troca do login para cadastro */}
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
                        title="Senha"
                        type="password"
                        placeholder="senha"
                        icon={<BiLock className="icon" />}
                    />
                    <Input
                        title="Confirme sua Senha"
                        type="password"
                        placeholder="confirme a senha..."
                        icon={<BiLock className="icon" />}
                    />
                </div>
            </form>
            <Button type="submit" style={styleButtonSecundary} name="Entrar" />
        </main>
    </>
);
}