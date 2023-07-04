import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddAjudante() {
    const [ajudante, setAjudante] = useState({
        email_ajudante: "",
        senha_ajudante: "",
        nome_completo_ajudante: "",
        endereco_ajudante: "",
        cpf_ajudante: "",
        data_nasc_ajudante: "",
        telefone_ajudante: "",
    });

    const { email_ajudante, senha_ajudante, nome_completo_ajudante, endereco_ajudante, cpf_ajudante, data_nasc_ajudante, telefone_ajudante} = ajudante;

    const onInputChange = (e) => {
        setAjudante({ ...ajudante, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/ajudante", ajudante);
        navigate("/homeajudante");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Formulário Cadastrar Ajudantes</h2>

                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input
                                type={"mail"}
                                className="form-control"
                                placeholder="Digite seu e-mail"
                                name="email_ajudante"
                                value={email_ajudante}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Senha" className="form-label">Senha</label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Digite sua senha"
                                name="senha_ajudante"
                                value={senha_ajudante}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Nome" className="form-label">Nome</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu nome completo"
                                name="nome_completo_ajudante"
                                value={nome_completo_ajudante}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Endereco" className="form-label">Endereco</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu endereço"
                                name="endereco_ajudante"
                                value={endereco_ajudante}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="CPF" className="form-label">CPF</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu CPF"
                                name="cpf_ajudante"
                                value={cpf_ajudante}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="DataNasc" className="form-label">DataNasc</label>
                            <input
                                type={"date"}
                                className="form-control"
                                placeholder="Digite sua data de nascimento"
                                name="data_nasc_ajudante"
                                value={data_nasc_ajudante}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Telefone" className="form-label">Telefone</label>
                            <input
                                type={"tel"}
                                className="form-control"
                                placeholder="Digite seu telefone"
                                name="telefone_ajudante"
                                value={telefone_ajudante}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-outline-success">Cadastrar</button>
                        <Link className="btn btn-outline-danger mx-2"to={"/homeajudante"}>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
