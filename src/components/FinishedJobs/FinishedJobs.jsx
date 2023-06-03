import styled from "styled-components";
import "./FinishedJobs.css";

const StyledTrabalhosFeitos = styled.div`

  h2 {
    color: ${props => props.theme.textColor};
  }

  th {
    background: ${props => props.theme.spanColor};
    color: #FFFFFF;
  }

  td {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.glass};
  }
  
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function FinishedJobs(props) {

  return (
    <StyledTrabalhosFeitos>
      <section id="sectionJobs">
        <h2 className="titleIndex2">Últimas Entregas</h2>
        <div className="containerJobs" >
        <img
          src={props.img}
          // src="../../src/assets/adesivo-rastro.svg"
          alt=""
          className="adesivo"
        />
          <table>
            <thead>
              <tr>
                <th>Tipo de transporte</th>
                <th>De</th>
                <th>Para</th>
                <th>Distância</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mudança</td>
                <td>Av. 9 de Julho</td>
                <td>Av. Cruzeiro do Sul</td>
                <td>3km</td>
                <td>R$100</td>
              </tr>
              <tr>
                <td>Carreto</td>
                <td>Av. Paulista</td>
                <td>Oscar Freire</td>
                <td>3km</td>
                <td>R$150</td>
              </tr>
              <tr>
                <td>Mudança</td>
                <td>Faria Lima</td>
                <td>Higienópolis</td>
                <td>7km</td>
                <td>R$400</td>
              </tr>
              <tr>
                <td>Mudança</td>
                <td>Av. 9 de Julho</td>
                <td>Av. Cruzeiro do Sul</td>
                <td>3km</td>
                <td>R$100</td>
              </tr>
              <tr>
                <td>Carreto</td>
                <td>Av. Paulista</td>
                <td>Oscar Freire</td>
                <td>3km</td>
                <td>R$150</td>
              </tr>
              <tr>
                <td>Mudança</td>
                <td>Faria Lima</td>
                <td>Higienópolis</td>
                <td>7km</td>
                <td>R$400</td>
              </tr>
            
              <tr>
                <td>Mudança</td>
                <td>Av. 9 de Julho</td>
                <td>Av. Cruzeiro do Sul</td>
                <td>3km</td>
                <td>R$100</td>
              </tr>
              <tr>
                <td>Carreto</td>
                <td>Av. Paulista</td>
                <td>Oscar Freire</td>
                <td>3km</td>
                <td>R$150</td>
              </tr>
              <tr>
                <td>Mudança</td>
                <td>Faria Lima</td>
                <td>Higienópolis</td>
                <td>7km</td>
                <td>R$400</td>
              </tr>
              <tr>
                <td>Mudança</td>
                <td>Av. 9 de Julho</td>
                <td>Av. Cruzeiro do Sul</td>
                <td>3km</td>
                <td>R$100</td>
              </tr>
              <tr>
                <td>Carreto</td>
                <td>Av. Paulista</td>
                <td>Oscar Freire</td>
                <td>3km</td>
                <td>R$150</td>
              </tr>
              <tr>
                <td>Mudança</td>
                <td>Faria Lima</td>
                <td>Higienópolis</td>
                <td>7km</td>
                <td>R$400</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </section>
    </StyledTrabalhosFeitos>
  );
}
