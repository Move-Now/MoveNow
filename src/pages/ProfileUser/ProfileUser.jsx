import React, { useState } from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";


const StyledProfileDriver = styled.div`

  color: ${props => props.theme.textColor};
  border-color: ${props => props.theme.textColor};
  transition: ${props => props.theme.transitionComponents};

  .details-profile-total {
    background-color: ${props => props.theme.glass};
  }

  .left-details-profiles {
    background-color: ${props => props.theme.backgroundColor};
  }

  .right-details-profiles {
    background-color: ${props => props.theme.backgroundColor};
  }

  .details-profiles-content {
    border-bottom: 1px solid ${props => props.theme.textColor};
  }

  details-profiles-data-personal-title {
    border-right: 1px solid ${props => props.theme.textColor};
  }

  .data-personal-paragraphs-content {
    color: ${props => props.theme.spanColor};
  }

  .button-edit-profile-content {
    background: ${props => props.theme.spanColor};
    color: #fff;
    font-weight: 600;
  }
  
  .button-edit-profile-content-cancel {
    background: ${props => props.theme.glass};
    color: ${props => props.theme.textColor};
    font-weight: 600;
  }

  .truck-details-content {
    color: ${props => props.theme.spanColor};
    font-weight: 500;
  }

  .button-edit-profile-content-cancel:hover {
    background: ${props => props.theme.spanColor};
    color: #fff;
    transition: 0.5s;
  }

  input {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.glass};
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme.spanColor};
  }

  .assessment-driver {
    background-color: ${props => props.theme.backgroundColor};
  }

  .pending-budgets {
    background-color: ${props => props.theme.backgroundColor};
  }

  .registered-vehicle {
    background-color: ${props => props.theme.backgroundColor};
  }

  .details-button-content {
    background: ${props => props.theme.spanColor};
  }

  .help-assessment {
    border-right: 1px solid ${props => props.theme.textColor};
    border-bottom: 1px solid ${props => props.theme.textColor};
  }

  .help-assessment:hover {
    color: ${props => props.theme.spanColor};
    border: none;
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
  }

  button:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
    background: ${props => props.theme.corFraca};
  }

  .method-payment {
    border-right: 1px solid ${props => props.theme.textColor};
    border-bottom: 1px solid ${props => props.theme.textColor};
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function ProfileUser() {

  const [showData, setShowData] = useState(false);

  const showDataEdit = () => {
    setShowData(!showData)
  }

  const showDataEditCancel = () => {
    setShowData(!showData)

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      color: '#000',
      icon: 'info',
      title: 'Nenhuma alteração feita!'
    })
  }

  const buttonSave = () => {
    Swal.fire({
      title: 'Deseja salvar as mudanças?',
      showDenyButton: true,
      confirmButtonText: 'Salvar',
      denyButtonText: `Não salvar`,
      confirmButtonColor: '#000',
      denyButtonColor: '#ccc',

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          color: '#000',
          confirmButtonColor: '#000',
          icon: 'success',
          title: 'Salvo!'
        })
        setShowData(!showData)
      } else if (result.isDenied) {
        Swal.fire({
          color: '#000',
          confirmButtonColor: '#000',
          icon: 'info',
          title: 'As mudanças não foram salvas!'
        })
      }
    })
  }

  return (
    <StyledProfileDriver>
      <ScrollToTop />
      <div className="profile-driver">
        <div className="profile-driver-content">
          <h2 className="title-profile">Meu Perfil</h2>
          <div className="details-profile-total">


            {!showData && (
              <div className="details-profile">
                {/* Conteúdo sem poder editar */}
                <div className="left-details-profiles">
                  <div className="photo-circle"></div>
                  <p>Trocar Foto</p>
                </div>

                <div className="right-details-profiles">
                  <div className="details-profiles-content">
                    <div className="details-profiles-data-personal-title">
                      <p className="data-personal-title-content">Nome</p>
                    </div>

                    <div className="details-profiles-data-personal-paragraphs">
                      <p className="data-personal-paragraphs-content">Felipe Barbour</p>
                    </div>
                  </div>

                  <div className="details-profiles-content">
                    <div className="details-profiles-data-personal-title">
                      <p className="data-personal-title-content">E-mail</p>
                    </div>
                    
                    <div className="details-profiles-data-personal-paragraphs">
                      <p className="data-personal-paragraphs-content">felipe.barbourf@gmail.com</p>
                    </div>
                  </div>

                  <div className="details-profiles-content">
                    <div className="details-profiles-data-personal-title">
                      <p className="data-personal-title-content">Telefone</p>
                    </div>

                    <div className="details-profiles-data-personal-paragraphs">
                      <p className="data-personal-paragraphs-content">(11) 99171-2980</p>
                    </div>
                  </div>

                  <div className="details-profiles-content">
                    <div className="details-profiles-data-personal-title">
                      <p className="data-personal-title-content">Cliente desde</p>
                    </div>

                    <div className="details-profiles-data-personal-paragraphs">
                      <p className="data-personal-paragraphs-content">01/07</p>
                    </div>
                  </div>
                  <div className="button-edit-profile">
                    <button className="button-edit-profile-content" onClick={showDataEdit}>Editar</button>
                  </div>


                </div>

              </div>
            )}

            {showData && (
              <div className="details-profile">
                {/* Conteúdo podendo editar */}
                <div className="left-details-profiles">
                  <div className="photo-circle"></div>
                  <p>Trocar Foto</p>
                </div>

                <div className="right-details-profiles">
                  <form onSubmit={(e) => onSubmit(e)} id="EditProfile" className="edit-profile">
                    <div className="details-profiles-content-edit">
                      <div className="details-profiles-data-personal-title-edit">
                        <p className="data-personal-title-content-edit">Nome</p>
                      </div>
                      <input
                        type="text"
                        placeholder="Nome"
                      />
                    </div>

                    <div className="details-profiles-content-edit">
                      <div className="details-profiles-data-personal-title-edit">
                        <p className="data-personal-title-content-edit">E-mail</p>
                      </div>
                      <input
                        type="text"
                        placeholder="E-mail"
                      />
                    </div>

                    <div className="details-profiles-content-edit">
                      <div className="details-profiles-data-personal-title-edit">
                        <p className="data-personal-title-content-edit">Telefone</p>
                      </div>
                      <input
                        type="number"
                        placeholder="Telefone"
                      />
                    </div>

                    <div className="details-profiles-content-edit">
                      <div className="details-profiles-data-personal-title-edit">
                        <p className="data-personal-title-content-edit">Senha</p>
                      </div>
                      <input
                        type="password"
                        placeholder="senha"
                      />
                    </div>

                  </form>
                  <div className="button-edit-profile">
                    <button className="button-edit-profile-content" onClick={buttonSave}>Salvar</button>
                    <button className="button-edit-profile-content-cancel" onClick={showDataEditCancel}>Cancelar</button>
                  </div>
                </div>
              </div>
            )}
            
            <div className="assessment-driver">
              <div className="assessment-driver-left">
                  <div className="help-assessment">
                <Link to={"/faq"}>
                  <h2 className="assessment-driver-subtitle">Ajuda</h2>
                </Link>
                  </div>
              </div>

              <div className="assessment-driver-right">
                <h2 className="assessment-driver-subtitle">Pedidos já realizados</h2>
                <p className="data-personal-paragraphs-content">2</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </StyledProfileDriver>
  );
}
