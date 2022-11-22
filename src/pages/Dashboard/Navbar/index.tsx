const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-container--itens">
        <li className="nav-item">
          <div className="nav-item__container">
            <img src="./src/assets/relatorios-icon.svg" />
            <span className="nav-item__name"> Relatório</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-item__container">
            <img src="./src/assets/vender.svg" />
            <span className="nav-item__name">Pra vender</span>
          </div>
          <img className="dropdown-icon" src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <div className="nav-item__container">
            <img src="./src/assets/assinaturas.svg" />
            <span className="nav-item__name"> Assinaturas</span>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-item__container">
            <img src="./src/assets/financeiro.svg" />
            <span className="nav-item__name"> Financeiro</span>
          </div>
          <img className="dropdown-icon" src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <div className="nav-item__container">
            <img src="./src/assets/configuracoes.svg" />
            <span className="nav-item__name"> Configurações</span>
          </div>
          <img className="dropdown-icon" src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <div className="nav-item__container">
            <img src="./src/assets/ferramentas.svg" />
            <span className="nav-item__name"> Ferramentas</span>
          </div>
          <img className="dropdown-icon" src="./src/assets/dropdown.svg" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
