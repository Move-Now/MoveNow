import React, {useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import NavbarUsuario from "../layout/NavbarUsuario";
import { Link, useParams } from "react-router-dom";

export default function HomeUsuario() {
    const {id_cliente}=useParams();

    useEffect(() => {
        loadUsuarios();
    }, []);

    const [usuarios, setUsuarios] = useState([]);

    const loadUsuarios = async () => {
        const result = await axios.get("http://localhost:8080/usuarios");
        setUsuarios(result.data);
    };

    const deleteUsuario = async (id_cliente) => {
        await axios.delete(`http://localhost:8080/usuario/${id_cliente}`)
        loadUsuarios();
    }

    return (
        <>
         <NavbarUsuario />
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Usuário</th>
                                <th scope="col">Senha</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">CPF</th>
                                <th scope="col">DtNascimento</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Acao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{usuario.username}</td>
                                        <td>{usuario.senha}</td>
                                        <td>{usuario.nome_completo}</td>
                                        <td>{usuario.endereco}</td>
                                        <td>{usuario.cpf}</td>
                                        <td>{usuario.data_nasc}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.telefone}</td>

                                        <td>
                                            <Link className="btn btn-success mx-2" to={`/viewusuario/${usuario.id_cliente}`}>Visualisar</Link>
                                            <Link className="btn btn-outline-warning mx-2"to={`/editusuario/${usuario.id_cliente}`}>Editar</Link>
                                            <button className="btn btn-danger mx-2"onClick={()=>deleteUsuario(usuario.id_cliente)}>Deletar</button>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};