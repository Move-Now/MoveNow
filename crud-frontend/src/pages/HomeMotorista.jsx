import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import NavbarMotorista from "../layout/NavbarMotorista";
import { Link, useParams } from "react-router-dom";

export default function HomeMotorista() {
    const {id_motorista}=useParams();

    useEffect(() => {
        loadMotoristas();
    }, []);

    const [motoristas, setMotoristas] = useState([]);

    const loadMotoristas = async () => {
        const result = await axios.get("http://localhost:8080/motoristas");
        setMotoristas(result.data);
    };

    const deleteMotorista = async (id_motorista) => {
        await axios.delete(`http://localhost:8080/motorista/${id_motorista}`)
        loadMotoristas();
    }

    return (
        <>
            <NavbarMotorista />
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Senha</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">CNH</th>
                                <th scope="col">CPF</th>
                                <th scope="col">DtNasc</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Acao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                motoristas.map((motorista, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{motorista.email_motorista}</td>
                                        <td>{motorista.senha_motorista}</td>
                                        <td>{motorista.nome_completo_motorista}</td>
                                        <td>{motorista.endereco_motorista}</td>
                                        <td>{motorista.cnh_motorista}</td>
                                        <td>{motorista.cpf_motorista}</td>
                                        <td>{motorista.data_nasc_motorista}</td>
                                        <td>{motorista.telefone_motorista}</td>

                                        <td>
                                            <Link className="btn btn-success mx-2"to={`/viewmotorista/${motorista.id_motorista}`}>Visualisar</Link>
                                            <Link className="btn btn-outline-warning mx-2" to={`/editmotorista/${motorista.id_motorista}`}>Editar</Link>
                                            <button className="btn btn-danger mx-2"onClick={()=>deleteMotorista(motorista.id_motorista)}>Deletar</button>
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