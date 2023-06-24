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

  td::before {
    color: ${props => props.theme.spanColor};
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
          <table className="table-fineshed-jobs">
            <thead className="thead-fineshed-jobs">
              <tr className="tr-fineshed-jobs">
                <th className="th-fineshed-jobs">Tipo de transporte</th>
                <th className="th-fineshed-jobs">De</th>
                <th className="th-fineshed-jobs">Para</th>
                <th className="th-fineshed-jobs">Distância</th>
                <th className="th-fineshed-jobs">Valor</th>
              </tr>
            </thead>
            <tbody className="tbody-fineshed-jobs">
              <tr  className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Av. 9 de Julho</td>
                <td className="td-fineshed-jobs">Av. Cruzeiro do Sul</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$100</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Carreto</td>
                <td className="td-fineshed-jobs">Av. Paulista</td>
                <td className="td-fineshed-jobs">Oscar Freire</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$150</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Faria Lima</td>
                <td className="td-fineshed-jobs">Higienópolis</td>
                <td className="td-fineshed-jobs">7km</td>
                <td className="td-fineshed-jobs">R$400</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Av. 9 de Julho</td>
                <td className="td-fineshed-jobs">Av. Cruzeiro do Sul</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$100</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Carreto</td>
                <td className="td-fineshed-jobs">Av. Paulista</td>
                <td className="td-fineshed-jobs">Oscar Freire</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$150</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Faria Lima</td>
                <td className="td-fineshed-jobs">Higienópolis</td>
                <td className="td-fineshed-jobs">7km</td>
                <td className="td-fineshed-jobs">R$400</td>
              </tr>
            
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Av. 9 de Julho</td>
                <td className="td-fineshed-jobs">Av. Cruzeiro do Sul</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$100</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Carreto</td>
                <td className="td-fineshed-jobs">Av. Paulista</td>
                <td className="td-fineshed-jobs">Oscar Freire</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$150</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Faria Lima</td>
                <td className="td-fineshed-jobs">Higienópolis</td>
                <td className="td-fineshed-jobs">7km</td>
                <td className="td-fineshed-jobs">R$400</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Av. 9 de Julho</td>
                <td className="td-fineshed-jobs">Av. Cruzeiro do Sul</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$100</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Carreto</td>
                <td className="td-fineshed-jobs">Av. Paulista</td>
                <td className="td-fineshed-jobs">Oscar Freire</td>
                <td className="td-fineshed-jobs">3km</td>
                <td className="td-fineshed-jobs">R$150</td>
              </tr>
              <tr className="tr-fineshed-jobs">
                <td className="td-fineshed-jobs">Mudança</td>
                <td className="td-fineshed-jobs">Faria Lima</td>
                <td className="td-fineshed-jobs">Higienópolis</td>
                <td className="td-fineshed-jobs">7km</td>
                <td className="td-fineshed-jobs">R$400</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </section>
    </StyledTrabalhosFeitos>
  );
}
