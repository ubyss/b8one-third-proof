import Graph from "../../../components/BarChart";

const Aside = () => {
  const { name } = JSON.parse(localStorage.getItem("user")!!);
  return (
    <>
      <aside className="main-content">
        <div className="main-content-info">
          <h1 className="welcome-user">Olá, {name}</h1>
          <span className="text-info-page">
            Veja abaixo o resumo da sua organização
          </span>

          <div className="main-dashboard">
            <span className="main-dashboard__tab--title">Receitas</span>
            <span className="main-dashboard__tab--title">Parceiros</span>
            <span className="main-dashboard__tab--title">Comissões</span>
            <div className="main__date-container">
              <button>Hoje</button>
              <button>7 dias</button>
              <button>15 dias</button>
              <button>1 mês</button>
              <button>6 meses</button>
              <button>1 ano</button>
              <button>Personalizado</button>
            </div>
            <p className="main-dashboard__info-dates">
              Exibindo dados do período{" "}
              <span className="main-dashboard__choosed-date">
                10 de novembro de 2021 à 10 de outubro de 2022
              </span>
            </p>
            <div className="main__container-value">
              <span className="main-dashboard--choosed-date">
                R$ 12.233.983,02
              </span>
              <span className="main-dashboard--choosed-date-info">
                é a receita grada com vendas no período selecionado
              </span>
            </div>
            <Graph />
          </div>

          <div className="main__last-sells">
            <h2 className="main__title-last--sells">Últimas vendas</h2>
            <div className="main__table-title">
              <span>Cliente</span>
              <span>Data</span>
              <span>Valor</span>
              <span>Comissão</span>
              <span>Status</span>
            </div>
            <div className="main__table--info">
              <div className="main__table--info--client">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#ECEBF0" />
                  <path
                    d="M7.0815 11.2727H9.01616L11.6071 17.5966H11.7093L14.3002 11.2727H16.2349V20H14.7179V14.0043H14.6369L12.225 19.9744H11.0914L8.67951 13.9915H8.59854V20H7.0815V11.2727ZM19.1241 11.2727L21.3954 18.142H21.4849L23.752 11.2727H25.4906L22.4139 20H20.4622L17.3897 11.2727H19.1241Z"
                    fill="#2E046D"
                  />
                </svg>
                <span className="main__table-client--name">Marília Vilarinho Almada</span>
              </div>
              <span>30/09/2022</span>
              <span>R$ 999,00</span>
              <span>R$ 99,00</span>
              <span className="main__table--status">Confirmado</span>
            </div>
            <div className="main__table--info">
              <div className="main__table--info--client">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#ECEBF0" />
                  <path
                    d="M7.0815 11.2727H9.01616L11.6071 17.5966H11.7093L14.3002 11.2727H16.2349V20H14.7179V14.0043H14.6369L12.225 19.9744H11.0914L8.67951 13.9915H8.59854V20H7.0815V11.2727ZM19.1241 11.2727L21.3954 18.142H21.4849L23.752 11.2727H25.4906L22.4139 20H20.4622L17.3897 11.2727H19.1241Z"
                    fill="#2E046D"
                  />
                </svg>
                <span className="main__table-client--name">Marília Vilarinho Almada</span>
              </div>
              <span>30/09/2022</span>
              <span>R$ 999,00</span>
              <span>R$ 99,00</span>
              <span className="main__table--status">Confirmado</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
