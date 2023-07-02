import React, { useState, useEffect, useContext, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ThemeContext } from "styled-components";
import { Input } from "../../components/Input/Input";
import { Footer } from "../../components/Footer/Footer";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import { Tape } from "../../components/Tape/Tape";
import "./Order.css";
import { BiMap, BiSolidCity } from "react-icons/bi";
import { FaRoad } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdKitchen } from "react-icons/md";
import { FaRulerHorizontal } from "react-icons/fa";
import { FaRulerVertical } from "react-icons/fa";
import { FaArrowsAltH, FaWeightHanging } from "react-icons/fa";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Swal from "sweetalert2";
import axios from "axios";

const StyledOrder = styled.div`
  #sectionOrder {
    background-color: ${(props) => props.theme.glass};
    color: ${(props) => props.theme.textColor};
    transition: ${(props) => props.theme.transitionComponents};
  }

  input {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.spanColor};
  }

  .icon {
    color: ${(props) => props.theme.textColor};
  }

  input:focus {
    border: none;
    outline: 1px solid ${(props) => props.theme.spanColor};
  }

  .select-itens-order {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.spanColor};
  }

  .select-itens-order:focus {
    outline: 1px solid ${(props) => props.theme.spanColor};
  }

  #sectionOrder p span {
    color: ${(props) => props.theme.spanColor};
  }

  .wrapper-button-order button {
    background: ${(props) => props.theme.spanColor};
    font-weight: 600;
    color: #ffffff;
  }

  .wrapper-button-order .order-buttons-add {
    background: transparent;
    border: 2px solid ${(props) => props.theme.spanColor};
    color: ${(props) => props.theme.textColor};
  }

  .order-buttons-next {
    background: ${(props) => props.theme.spanColor};
    font-weight: 600;
    color: #ffffff;
  }

  th {
    background: ${(props) => props.theme.spanColor};
    color: #ffffff;
  }

  td {
    transition: ${(props) => props.theme.transitionComponents};
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.backgroundColor};
  }

  td::before {
    color: ${(props) => props.theme.spanColor};
  }

  .teste {
    background: transparent;
    cursor: pointer;
    border: none;
  }

  .teste:hover {
    transition: 0.2s;
    background: ${(props) => props.theme.backgroundColor};
    color: red;
  }

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Order() {
  const theme = useContext(ThemeContext);
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "dark");

  // FUNCIONALIDADE DE PEGAR O TEMA E MUDAR A IMAGEM DE ACORDO COM ELE

  useEffect(() => {
    setIsDarkMode(storedTheme === "dark");
  }, [storedTheme]);

  const imageTape = isDarkMode
    ? "../src/assets/LOGOLaranja.png"
    : "../src/assets/LOGOTransLight.png";

  // FUNCIONALIDADES DA API DO CEP, INPUTAR DIRETAMENTE NOS INPUTS

  const [cepOrigem, setCepOrigem] = useState("");
  const [cepDestino, setCepDestino] = useState("");
  const [detalhesOrigem, setDetalhesOrigem] = useState(null);
  const [detalhesDestino, setDetalhesDestino] = useState(null);

  const buscarDetalhesCEP = async (cep, tipo) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const detalhes = response.data;

      if (tipo === "origem") {
        setDetalhesOrigem(detalhes);
      } else if (tipo === "destino") {
        setDetalhesDestino(detalhes);
      }
    } catch (error) {
      if (tipo === "origem") {
        Swal.fire({
          color: "#000",
          confirmButtonColor: "#000",
          icon: "error",
          title: "Oops...",
          text: "CEP de origem inválido!",
        });

        setCepOrigem("");
        setDetalhesOrigem(null);
        document.getElementById("ruaOrigem").value = "";
        document.getElementById("cidadeOrigem").value = "";
        document.getElementById("ufOrigem").value = "";
        document.getElementById("numeroOrigem").value = "";
      } else if (tipo === "destino") {
        Swal.fire({
          color: "#000",
          confirmButtonColor: "#000",
          icon: "error",
          title: "Oops...",
          text: "CEP de destino inválido!",
        });

        setCepDestino("");
        setDetalhesDestino(null);
        document.getElementById("ruaDestino").value = "";
        document.getElementById("cidadeDestino").value = "";
        document.getElementById("ufDestino").value = "";
        document.getElementById("numeroDestino").value = "";
      }
    }
  };

  useEffect(() => {
    const cepOrigemLocalStorage = localStorage.getItem("cepOrigem");
    const cepDestinoLocalStorage = localStorage.getItem("cepDestino");

    if (cepOrigemLocalStorage) {
      setCepOrigem(cepOrigemLocalStorage);
      buscarDetalhesCEP(cepOrigemLocalStorage, "origem");
    }

    if (cepDestinoLocalStorage) {
      setCepDestino(cepDestinoLocalStorage);
      buscarDetalhesCEP(cepDestinoLocalStorage, "destino");
    }
  }, []);

  const handleCepOrigemKeyDown = (event) => {
    const numeroInput = document.querySelector("#numeroOrigem");

    if (event.key === "Enter") {
      event.preventDefault();
      buscarDetalhesCEP(cepOrigem, "origem");

      if (numeroInput) {
        numeroInput.focus();
      }
    }
  };

  const handleCepDestinoKeyDown = (event) => {
    const numeroInput = document.querySelector("#numeroDestino");

    if (event.key === "Enter") {
      event.preventDefault();
      buscarDetalhesCEP(cepDestino, "destino");

      if (numeroInput) {
        numeroInput.focus();
      }
    }
  };

  const handleNumeroOrigemKeyDown = (event) => {
    const numeroInput = document.querySelector("#cepDestino");

    if (event.key === "Enter") {
      event.preventDefault();

      if (numeroInput) {
        numeroInput.focus();
      }
    }
  };

  const handleNumeroDestinoKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      scrollToSection();
    }
  };

  // FUNCIONALIDADE DE ROLAR A PÁGINA AO CLICAR NO BOTÃO DE PRÓXIMO APENAS SE OS INPUTS DE ENDERECO TIVEREM PREENCHIDOS

  const verificarInputsPreenchidosCep = () => {
    const inputs = [
      cepOrigem,
      detalhesOrigem?.logradouro,
      document.getElementById("numeroOrigem")?.value,
      detalhesOrigem?.localidade,
      detalhesOrigem?.uf,
      cepDestino,
      detalhesDestino?.logradouro,
      document.getElementById("numeroDestino")?.value,
      detalhesDestino?.localidade,
      detalhesDestino?.uf,
    ];

    const algumInputVazio = inputs.some((value) => !value);
    return !algumInputVazio;
  };

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    const numeroInputOrigem = document.querySelector("#numeroOrigem").value;
    const numeroInputDestino = document.querySelector("#numeroDestino").value;
    const cepOrigem = document.querySelector("#cepOrigem").value;
    const cepDestino = document.querySelector("#cepDestino").value;

    if (verificarInputsPreenchidosCep()) {
      if (numeroInputOrigem == numeroInputDestino && cepOrigem == cepDestino) {
        Swal.fire({
          color: "#000",
          confirmButtonColor: "#000",
          icon: "error",
          title: "Oops...",
          text: "Não é possível mudar para o mesmo endereço!",
        });

        document.querySelector("#numeroOrigem").value = "";
        document.querySelector("#numeroDestino").value = "";
      } else {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      Swal.fire({
        color: "#000",
        confirmButtonColor: "#000",
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos!",
      });
    }
  };

  // FUNCIONALIDADES DE ADICIONAR ITENS NA TABELA:

  const listaItens = [
    {
      nome: "Geladeira",
      peso: "60",
      altura: "175",
      largura: "65",
      comprimento: "65",
    },
    {
      nome: "Sofá",
      peso: "80",
      altura: "60",
      largura: "60",
      comprimento: "220",
    },
    {
      nome: "Mesa",
      peso: "15",
      altura: "75",
      largura: "80",
      comprimento: "120",
    },
  ];

  const [inputsPreenchidos, setInputsPreenchidos] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState("");
  const [volumeTotal, setVolumeTotal] = useState(0);
  const [pesoTotal, setPesoTotal] = useState(0);
  const [totalItens, setTotalItens] = useState(0);
  const [itensAdicionados, setItensAdicionados] = useState([]);

  const [itemPersonalizado, setItemPersonalizado] = useState({
    nome: "",
    peso: "",
    altura: "",
    largura: "",
    comprimento: "",
  });

  const handleSelectItem = (event) => {
    const selectedIndex = event.target.value;
    setSelectedItemIndex(selectedIndex);
    if (selectedIndex === "outro") {
      setItemPersonalizado({
        ...itemPersonalizado,
        nome: "",
        peso: "",
        altura: "",
        largura: "",
        comprimento: "",
      });
    } else if (selectedIndex !== "") {
      const selectedItem = listaItens[selectedIndex];
      setItemPersonalizado({
        ...itemPersonalizado,
        nome: selectedItem.nome,
        peso: selectedItem.peso,
        altura: selectedItem.altura,
        largura: selectedItem.largura,
        comprimento: selectedItem.comprimento,
      });
    }
  };

  // FUNCIONALIDADE DE SOMAR O TOTAL DE ITENS, VOLUME E PESO

  const calcularTotal = () => {
    let volume = 0;
    let peso = 0;

    itensAdicionados.forEach((item) => {
      volume +=
        (parseInt(item.altura) *
          parseInt(item.largura) *
          parseInt(item.comprimento)) /
        1000000;
      peso += parseFloat(item.peso);
    });

    setVolumeTotal(volume);
    setTotalItens(itensAdicionados.length);
    setPesoTotal(peso);
  };

  useEffect(() => {
    calcularTotal();
  }, [itensAdicionados]);

  // FUNCIONALIDADE DE MUDAR O VALOR DO SEGURO DE ACORDO COM OS ITENS

  const [seguroValor, setSeguroValor] = useState(0);

  useEffect(() => {
    if (totalItens <= 10) {
      setSeguroValor(50);
    } else if (totalItens <= 15) {
      setSeguroValor(75);
    } else {
      setSeguroValor(100);
    }
  }, [totalItens]);

  // FUNCIONALIDADE DE VERIFICAR SE TODOS OS INPUTS ESTÃO PREENCHIDOS PARA INSERIR NA TABELA

  const verificarInputsPreenchidos = () => {
    const inputs = Object.values(itemPersonalizado);
    const inputVazio = inputs.some((value) => value === "");
    setInputsPreenchidos(!inputVazio);
  };

  useEffect(() => {
    verificarInputsPreenchidos();
  }, [itemPersonalizado]);

  // FUNCIONALIDADE DE ADICIONAR ITENS NA TABELA

  const handleAdicionarItem = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      color: "#000",
      icon: "success",
      title: "Item adicionado!",
    });

    if (inputsPreenchidos) {
      setItensAdicionados([...itensAdicionados, itemPersonalizado]);
      setItemPersonalizado({
        nome: "",
        peso: "",
        altura: "",
        largura: "",
        comprimento: "",
      });
      setSelectedItemIndex("");
    } else {
      Swal.fire({
        color: "#000",
        confirmButtonColor: "#000",
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos!",
      });
    }
  };

  // FUNCIONALIDADE DE EXCLUIR ITENS DA TABELA E ATUALIZAR OS DADOS TOTAIS

  const handleExcluirItem = (index) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      color: "#000",
      icon: "error",
      title: "Item removido!",
    });

    const novosItens = [...itensAdicionados];
    const itemExcluido = novosItens.splice(index, 1)[0];

    const volumeItemExcluido =
      (parseInt(itemExcluido.altura) *
        parseInt(itemExcluido.largura) *
        parseInt(itemExcluido.comprimento)) /
      1000000;
    setVolumeTotal(volumeTotal - volumeItemExcluido);
    setPesoTotal(pesoTotal - parseFloat(itemExcluido.peso));

    setTotalItens(totalItens - 1);

    setItensAdicionados(novosItens);
  };

  function enviarDados() {
    //dados de endereço

    //dados dos itens
    const [...dados] = document.querySelectorAll("tbody tr");
    const dadosItens = dados.map((dado) => {
      const nome = dado.querySelector("td:nth-child(1)").textContent;

      const volume = dado.querySelector("td:nth-child(2)").textContent;

      const peso = dado.querySelector("td:nth-child(3)").textContent;

      return {
        item: {
          nome: nome,
          peso: peso,
          volume: volume,
        },
      };
    });

    const novoJson = {
      itens: {}
    };


    dadosItens.forEach((item, index) => {
      const nomeItem = item.item.nome;
      const peso = parseFloat(item.item.peso);
      const volume = parseFloat(item.item.volume);
    
      novoJson.itens[`item${index + 1}`] = {
        nomeItem,
        peso,
        volume
      };
    });
    
    console.log(novoJson);
    console.log(valoresConcatenadosOrigem);
  }
  return (
    <ThemeProvider theme={theme}>
      <StyledOrder>
        <ScrollToTop />
        <div className="topOrder">
          <div className="contentTopOrder">
            <h1 className="titletopOrder">
              A decisão certa é pedir agora com a MoveNow
            </h1>
          </div>
        </div>
        <main id="mainOrder">
          <section id="sectionOrder">
            <h2 className="section-order-title">
              Informe os dados do endereço
            </h2>
            <p className="section-order-paragraph">
              Aperte <span>"enter"</span> para autocompletar seu CEP
            </p>
            <form action="">
              <div className="column">
                <h2 className="subtitle-column-order">Origem:</h2>
                <Input
                  id="cepOrigem"
                  title="CEP"
                  type="text"
                  placeholder="00000-000"
                  value={cepOrigem}
                  onKeyDown={handleCepOrigemKeyDown}
                  onChange={(event) => setCepOrigem(event.target.value)}
                  icon={<BiMap className="icon" />}
                  
                />
                <Input
                  id="ruaOrigem"
                  title="Rua"
                  type="text"
                  placeholder="Nome da rua"
                  value={detalhesOrigem?.logradouro}
                  icon={<FaRoad className="icon" />}
                />
                <Input
                  id="numeroOrigem"
                  title="Número"
                  type="text"
                  onKeyDown={handleNumeroOrigemKeyDown}
                  placeholder="000"
                  icon={<AiOutlineFieldNumber className="icon" />}
                />
                <Input
                  id="cidadeOrigem"
                  title="Cidade"
                  type="text"
                  placeholder="São Paulo"
                  value={detalhesOrigem?.localidade}
                  icon={<BiSolidCity className="icon" />}
                />
                <Input
                  id="ufOrigem"
                  title="UF"
                  type="text"
                  placeholder="Estado"
                  value={detalhesOrigem?.uf}
                  icon={<FaMapMarkedAlt className="icon" />}
                />
              </div>
              <br />
              <div className="column">
                <h2 className="subtitle-column-order">Destino:</h2>
                <Input
                  id="cepDestino"
                  title="CEP"
                  type="text"
                  placeholder="00000-000"
                  value={cepDestino}
                  onKeyDown={handleCepDestinoKeyDown}
                  onChange={(event) => setCepDestino(event.target.value)}
                  icon={<BiMap className="icon" />}
                />
                <Input
                  id="ruaDestino"
                  title="Rua"
                  type="text"
                  placeholder="Nome da rua"
                  value={detalhesDestino?.logradouro}
                  icon={<FaRoad className="icon" />}
                />
                <Input
                  id="numeroDestino"
                  title="Número"
                  type="text"
                  onKeyDown={handleNumeroDestinoKeyDown}
                  placeholder="000"
                  icon={<AiOutlineFieldNumber className="icon" />}
                />
                <Input
                  id="cidadeDestino"
                  title="Cidade"
                  type="text"
                  placeholder="São Paulo"
                  value={detalhesDestino?.localidade}
                  icon={<BiSolidCity className="icon" />}
                />
                <Input
                  id="ufDestino"
                  title="UF"
                  type="text"
                  placeholder="Estado"
                  value={detalhesDestino?.uf}
                  icon={<FaMapMarkedAlt className="icon" />}
                />
              </div>
            </form>
            <button className="order-buttons-next" onClick={scrollToSection}>
              Próximo {">"}
            </button>
          </section>

          <Tape img={imageTape} />

          <section id="sectionOrder" ref={sectionRef}>
            <h2 className="section-order-title">
              Informe os detalhes da mudança
            </h2>
            <form action="" className="form-section-order">
              <div className="column">
                {/* Select com as opções pré definidas */}

                <select
                  value={selectedItemIndex}
                  onChange={handleSelectItem}
                  className="select-itens-order"
                >
                  <option value="" hidden>
                    Tipo de item
                  </option>
                  {listaItens.map((item, index) => (
                    <option key={index} value={index}>
                      {item.nome}
                    </option>
                  ))}
                  <option value="outro">Outro</option>
                </select>

                <Input
                  title="Tipo de item:"
                  type="text"
                  placeholder="ex.: Geladeira"
                  icon={<MdKitchen className="icon" />}
                  value={itemPersonalizado.nome}
                  onChange={(event) =>
                    setItemPersonalizado({
                      ...itemPersonalizado,
                      nome: event.target.value,
                    })
                  }
                />

                <Input
                  title="Altura (cm)"
                  type="number"
                  placeholder="0"
                  icon={<FaRulerVertical className="icon" />}
                  value={itemPersonalizado.altura}
                  onChange={(event) =>
                    setItemPersonalizado({
                      ...itemPersonalizado,
                      altura: event.target.value,
                    })
                  }
                />

                <Input
                  title="Largura (cm)"
                  type="number"
                  placeholder="0"
                  icon={<FaRulerHorizontal className="icon" />}
                  value={itemPersonalizado.largura}
                  onChange={(event) =>
                    setItemPersonalizado({
                      ...itemPersonalizado,
                      largura: event.target.value,
                    })
                  }
                />

                <Input
                  title="Comprimento (cm)"
                  type="number"
                  placeholder="0"
                  icon={<FaArrowsAltH className="icon" />}
                  value={itemPersonalizado.comprimento}
                  onChange={(event) =>
                    setItemPersonalizado({
                      ...itemPersonalizado,
                      comprimento: event.target.value,
                    })
                  }
                />

                <Input
                  title="Peso (kg)"
                  type="number"
                  placeholder="0"
                  icon={<FaWeightHanging className="icon" />}
                  value={itemPersonalizado.peso}
                  onChange={(event) =>
                    setItemPersonalizado({
                      ...itemPersonalizado,
                      peso: event.target.value,
                    })
                  }
                />

                <Checkbox
                  title="Seguro incluso"
                  price={seguroValor.toFixed(2)}
                />

                <div className="wrapper-button-order">
                  {/* Botão para adicionar o item personalizado à tabela */}
                  <button
                    className="order-buttons-add"
                    type="button"
                    onClick={handleAdicionarItem}
                  >
                    + Adicionar item
                  </button>
                </div>
              </div>

              <div className="column">
                <div className="table-order">
                  <table className="table-order-content">
                    <thead className="thead-table-order">
                      <tr>
                        <th>Item</th>
                        <th>Volume (m³)</th>
                        <th>Peso (Kg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itensAdicionados.map((item, index) => (
                        <tr key={index}>
                          <td>{item.nome}</td>
                          <td>
                            {(item.altura * item.largura * item.comprimento) /
                              1000000}
                          </td>
                          <td>{item.peso}</td>
                          <td
                            onClick={() => handleExcluirItem(index)}
                            className="teste"
                          >
                            <AiOutlineClose className="teste2" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="wrapper-button-order">
                  <div className="total-details-order">
                    <div className="total-details-content">
                      <p>Itens: {totalItens}</p>
                    </div>

                    <div className="total-details-content">
                      <p>Volume: {volumeTotal.toFixed(2)} m³</p>
                    </div>

                    <div className="total-details-content">
                      <p>Peso: {pesoTotal} Kg</p>
                    </div>
                  </div>
                  <button className="order-buttons" onMouseEnter={enviarDados}>
                    Finalizar
                  </button>
                </div>
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </StyledOrder>
    </ThemeProvider>
  );
}
