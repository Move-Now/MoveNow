import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewMotorista() {
    
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

    const{id_motorista}=useParams();
    
    useEffect(() => {
        loadMotorista();
    }, []);

    const loadMotorista = async () => {
        const result = await axios.get(`http://localhost:8080/motorista/${id_motorista}`);
        setMotorista(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Listar Motoristas : ID = {motorista.id_motorista}</h2>
                    <div className="card">
                        <div className="card-header">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>E-mail : </b>
                                    {motorista.email_motorista}
                                </li>
                                <li className="list-group-item">
                                    <b>Senha : </b>
                                    {motorista.senha_motorista}
                                </li>
                                <li className="list-group-item">
                                    <b>Nome Completo : </b>
                                    {motorista.nome_completo_motorista}
                                </li>
                                <li className="list-group-item">
                                    <b>Endereço : </b>
                                    {motorista.endereco_motorista}
                                </li>
                                <li className="list-group-item">
                                    <b>CNH : </b>
                                    {motorista.cnh_motorista}
                                </li>
                                <li className="list-group-item">
                                    <b>CPF : </b>
                                    {motorista.cpf_motorista}
                                </li>
                                <li className="list-group-item">
                                    <b>Data de Nascimento : </b>
                                    {motorista.data_nasc_motorista}
                                </li> 
                                <li className="list-group-item">
                                    <b>Telefone : </b>
                                    {motorista.telefone_motorista}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-success my-2" to={"/homemotorista"}>Voltar</Link>
                </div>
            </div>
        </div>
    );
};