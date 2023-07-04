import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUsuario() {
    
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

    const{id_cliente}=useParams();
    
    useEffect(() => {
        loadUsuario();
    }, []);

    const loadUsuario = async () => {
        const result = await axios.get(`http://localhost:8080/usuario/${id_cliente}`);
        setUsuario(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Listar Usuarios : ID = {usuario.id_cliente}</h2>
                    <div className="card">
                        <div className="card-header">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Username : </b>
                                    {usuario.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Senha : </b>
                                    {usuario.senha}
                                </li>
                                <li className="list-group-item">
                                    <b>Nome Completo : </b>
                                    {usuario.nome_completo}
                                </li>
                                <li className="list-group-item">
                                    <b>Endereço : </b>
                                    {usuario.email}
                                </li>
                                <li className="list-group-item">
                                    <b>CPF : </b>
                                    {usuario.cpf}
                                </li>
                                <li className="list-group-item">
                                    <b>Data de Nascimento : </b>
                                    {usuario.data_nasc}
                                </li>
                                <li className="list-group-item">
                                    <b>E-mail : </b>
                                    {usuario.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Telefone : </b>
                                    {usuario.telefone}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-success my-2" to={"/homeusuario"}>Voltar</Link>
                </div>
            </div>
        </div>
    );
};