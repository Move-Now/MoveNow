import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavbarAjudante from "../layout/NavbarAjudante";

export default function HomeAjudante() {
    const {id_ajudante}=useParams();


    useEffect(() => {
        loadAjudantes();
    }, []);

    const [ajudantes, setAjudantes] = useState([]);

    const loadAjudantes = async () => {
        const result = await axios.get("http://localhost:8080/ajudantes");
        setAjudantes(result.data);
    };

    const deleteAjudante = async (id_ajudante) => {
        await axios.delete(`http://localhost:8080/ajudante/${id_ajudante}`)
        loadAjudantes();
    }

    return (
        <>
            <NavbarAjudante />
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
                                <th scope="col">CPF</th>
                                <th scope="col">DtNascimento</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Acao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ajudantes.map((ajudante, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{ajudante.email_ajudante}</td>
                                        <td>{ajudante.senha_ajudante}</td>
                                        <td>{ajudante.nome_completo_ajudante}</td>
                                        <td>{ajudante.endereco_ajudante}</td>
                                        <td>{ajudante.cpf_ajudante}</td>
                                        <td>{ajudante.data_nasc_ajudante}</td>
                                        <td>{ajudante.telefone_ajudante}</td>

                                        <td>
                                            <Link className="btn btn-success mx-2"to={`/viewajudante/${ajudante.id_ajudante}`}>Visualisar</Link>
                                            <Link className="btn btn-outline-warning mx-2"to={`/editajudante/${ajudante.id_ajudante}`}>Editar</Link>
                                            <button className="btn btn-danger mx-2" onClick={()=>deleteAjudante(ajudante.id_ajudante)}>Deletar</button>
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