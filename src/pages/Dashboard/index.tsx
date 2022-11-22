import "../../styles/Dashboard/style.scss";
import Aside from "./Aside";
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <>
      <header className="dashboard__top-bar">
        <div className="top-bar__left-menu">
          <img
            className="top-bar__logo-image"
            src="./src/assets/logo.svg"
            alt="Academy Store"
          />
          <h1 className="top-bar__logo-title">Academy Store</h1>
        </div>
        <div className="top-bar__right-menu">
          <img className="top-bar__righ--icons" src="./src/assets/help-logo.svg" alt="" />
          <img className="top-bar__righ--icons" src="./src/assets/notification-icon.svg" alt="" />
          <div className="right-menu__user-info">
            <img className="top-bar__righ--icons" src="./src/assets/user-avatar.svg" alt="" />
            <span className="right-menu__user-name">Gustavo Lima</span>
          </div>
        </div>
      </header>
      <main className="container-content">
        <Navbar />
        <Aside />
      </main>
    </>
  );
};

export default Dashboard;
