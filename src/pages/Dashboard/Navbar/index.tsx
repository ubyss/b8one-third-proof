const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-container--itens">
        <li className="nav-item">
          <img src="./src/assets/relatorios-icon.svg" />
          <span className="nav-item__name"> Relatório</span>
          <img src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <img src="./src/assets/vender.svg" />
          <span className="nav-item__name">Pra vender</span>
          <img src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <img src="./src/assets/assinaturas.svg" />
          <span className="nav-item__name"> Assinaturas</span>
          <img src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <img src="./src/assets/financeiro.svg" />
          <span className="nav-item__name"> Financeiro</span>
          <img src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <img src="./src/assets/configuracoes.svg" />
          <span className="nav-item__name"> Configurações</span>
          <img src="./src/assets/dropdown.svg" />
        </li>
        <li className="nav-item">
          <img src="./src/assets/ferramentas.svg" />
          <span className="nav-item__name"> Ferramentas</span>
          <img src="./src/assets/dropdown.svg" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
