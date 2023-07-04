import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewAjudante() {
    
    const [ajudante, setAjudante] = useState({
        email_ajudante: "",
        senha_ajudante: "",
        nome_completo_ajudante: "",
        endereco_ajudante: "",
        cpf_ajudante: "",
        data_nasc_ajudante: "",
        telefone_ajudante: "",
    });

    const{id_ajudante}=useParams();
    
    useEffect(() => {
        loadAjudante();
    }, []);

    const loadAjudante = async () => {
        const result = await axios.get(`http://localhost:8080/ajudante/${id_ajudante}`);
        setAjudante(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Listar Ajudantes : ID = {ajudante.id_ajudante}</h2>
                    <div className="card">
                        <div className="card-header">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>E-mail : </b>
                                    {ajudante.email_ajudante}
                                </li>
                                <li className="list-group-item">
                                    <b>Senha : </b>
                                    {ajudante.senha_ajudante}
                                </li>
                                <li className="list-group-item">
                                    <b>Nome Completo : </b>
                                    {ajudante.nome_completo_ajudante}
                                </li>
                                <li className="list-group-item">
                                    <b>Endereço : </b>
                                    {ajudante.endereco_ajudante}
                                </li>
                                <li className="list-group-item">
                                    <b>CPF : </b>
                                    {ajudante.cpf_ajudante}
                                </li>
                                <li className="list-group-item">
                                    <b>Data de Nascimento : </b>
                                    {ajudante.data_nasc_ajudante}
                                </li> 
                                <li className="list-group-item">
                                    <b>Telefone : </b>
                                    {ajudante.telefone_ajudante}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-success my-2" to={"/homeajudante"}>Voltar</Link>
                </div>
            </div>
        </div>
    );
};