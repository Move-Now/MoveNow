import React, { useState, useEffect, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import "./style.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Swal from "sweetalert2";
import axios from "axios";

const StyledProfileDriver = styled.div`

  color: ${props => props.theme.textColor};

  .details-profile {
    background-color: ${props => props.theme.glass};
  }

  .left-details-profiles {
    background-color: ${props => props.theme.backgroundColor};
  }

  .right-details-profiles {
    background-color: ${props => props.theme.backgroundColor};
  }

  .data-personal-paragraphs-content {
    color: ${props => props.theme.spanColor};
  }

  .button-edit-profile-content {
    background: ${props => props.theme.spanColor};
    color: #fff;
    font-weight: 600;
  }

  input {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.glass};
  }

  input:focus {
    outline: 1px solid ${(props) => props.theme.spanColor};
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function ProfileDriver() {
  
  const [showData, setShowData] = useState(false);

  const showDataEdit = () => {
    setShowData(!showData)
  }

  const buttonSave = () => {
    Swal.fire({
      title: 'Deseja salvar as mudanças?',
      showDenyButton: true,
      confirmButtonText: 'Salvar',
      denyButtonText: `Não salvar`,
      confirmButtonColor: '#000', // Define a cor do botão de confirmação (Salvar)
      denyButtonColor: '#ccc',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Salvo!', '', 'success')
        setShowData(!showData)
      } else if (result.isDenied) {
        Swal.fire('As mudanças não foram salvas', '', 'info')
      }
    })
  }

  return (
      <StyledProfileDriver>
        <ScrollToTop />
          <div className="profile-driver">
            <div className="profile-driver-content">
              <h2>Meu Perfil</h2>

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
                          <p className="data-personal-title-content">Motorista desde</p>
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
              
                    </form>
                    <div className="button-edit-profile">
                        <button className="button-edit-profile-content" onClick={buttonSave}>Salvar</button>
                      </div>
                  </div>
                </div>
                )}
            </div>
          </div>
      </StyledProfileDriver>
  );
}
