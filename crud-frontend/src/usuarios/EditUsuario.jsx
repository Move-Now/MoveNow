import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUsuario() {
    let navigate = useNavigate();
    const { id_cliente } = useParams();

    const [usuario, setUsuario] = useState({
        username: "",
        senha: "",
        nome_completo: "",
        endereco: "",
        cpf: "",
        data_nasc: "",
        email: "",
        telefone: "",
    });

    const { username, senha, nome_completo, endereco, cpf, data_nasc, email, telefone } = usuario;

    const onInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUsuario();
    }, []);


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/usuario/${id_cliente}`, usuario);
        navigate("/homeusuario");
    };

    const loadUsuario = async () => {
        const result = await axios.get(`http://localhost:8080/usuario/${id_cliente}`)
        setUsuario(result.data)
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Formulário Editar Usuários</h2>

                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Username</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu usuário"
                                name="username"
                                value={username}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Senha" className="form-label">Senha</label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Digite sua senha"
                                name="senha"
                                value={senha}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Nome" className="form-label">Nome</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu nome completo"
                                name="nome_completo"
                                value={nome_completo}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Endereco" className="form-label">Endereco</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu endereço"
                                name="endereco"
                                value={endereco}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="CPF" className="form-label">CPF</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu CPF"
                                name="cpf"
                                value={cpf}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="DataNasc" className="form-label">DataNasc</label>
                            <input
                                type={"date"}
                                className="form-control"
                                placeholder="Digite sua data de nascimento"
                                name="data_nasc"
                                value={data_nasc}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input
                                type={"mail"}
                                className="form-control"
                                placeholder="Digite seu e-mail"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Telefone" className="form-label">Telefone</label>
                            <input
                                type={"tel"}
                                className="form-control"
                                placeholder="Digite seu telefone"
                                name="telefone"
                                value={telefone}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-outline-success">Cadastrar</button>
                        <Link className="btn btn-outline-danger mx-2" to={"/homeusuario"}>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};