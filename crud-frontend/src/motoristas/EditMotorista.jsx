import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditMotorista() {

    let navigate = useNavigate();
    const { id_motorista } = useParams();

    const [motorista, setMotorista] = useState({
        email_motorista: "",
        senha_motorista: "",
        nome_completo_motorista: "",
        endereco_motorista: "",
        cnh_motorista: "",
        cpf_motorista: "",
        data_nasc_motorista: "",
        telefone_motorista: "",
    });

    const { email_motorista, senha_motorista, nome_completo_motorista, endereco_motorista, cnh_motorista, cpf_motorista, data_nasc_motorista, telefone_motorista } = motorista;

    const onInputChange = (e) => {
        setMotorista({ ...motorista, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadMotorista();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/motorista/${id_motorista}`, motorista);
        navigate("/homemotorista");
    };

    const loadMotorista = async () => {
        const result = await axios.get(`http://localhost:8080/motorista/${id_motorista}`)
        setMotorista(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Formulário Editar Motoristas</h2>

                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input
                                type={"mail"}
                                className="form-control"
                                placeholder="Digite seu e-mail"
                                name="email_motorista"
                                value={email_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Senha" className="form-label">Senha</label>
                            <input
                                type={"password"}
                                className="form-control"
                                placeholder="Digite sua senha"
                                name="senha_motorista"
                                value={senha_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Nome" className="form-label">Nome</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu nome completo"
                                name="nome_completo_motorista"
                                value={nome_completo_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Endereco" className="form-label">Endereco</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu endereço"
                                name="endereco_motorista"
                                value={endereco_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="CNH" className="form-label">CNH</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu CNH"
                                name="cnh_motorista"
                                value={cnh_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="CPF" className="form-label">CPF</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Digite seu CPF"
                                name="cpf_motorista"
                                value={cpf_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="DataNasc" className="form-label">DataNasc</label>
                            <input
                                type={"date"}
                                className="form-control"
                                placeholder="Digite sua data de nascimento"
                                name="data_nasc_motorista"
                                value={data_nasc_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Telefone" className="form-label">Telefone</label>
                            <input
                                type={"tel"}
                                className="form-control"
                                placeholder="Digite seu telefone"
                                name="telefone_motorista"
                                value={telefone_motorista}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <button className="btn btn-outline-success">Cadastrar</button>
                        <Link className="btn btn-outline-danger mx-2" to={"/homemotorista"}>Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
