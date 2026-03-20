/* Import Styles */
import "./Header.scss";
/* Import Styles */

/* Import Componets */
import Topbar from "./Topbar";
import SearchInput from "./SearchInput";
/* Import Componets */

/* Import Assets */
import Logo from "../../assets/images/logo.png";
import Group from "../../assets/images/icons/Group.png";
import Heart from "../../assets/images/icons/Heart.png";
import UserCircle from "../../assets/images/icons/UserCircle.png";
import ShoppingCart from "../../assets/images/icons/ShoppingCart.png";
/* Import Assets */
function Header() {
  return (
    <>
      <header>
        <Topbar />
        <div className="container">
          <div className="container_header">
            <a href="#home" title="Econverse">
              <img src={Logo} alt="Logo Econverse" title="Logo Econverse" />
            </a>
            <SearchInput />
            <div>
              <ul className="menu_option">
                <li>
                  <a href="#Pedidos" title="Pedidos">
                    <img src={Group} alt="Pedidos" title="Pedidos" />
                  </a>
                </li>
                <li>
                  <a href="#Pedidos" title="Pedidos">
                    <img src={Heart} alt="Favoritos" title="Favoritos" />
                  </a>
                </li>
                <li>
                  <a href="#Usuario" title="Usuario">
                    <img src={UserCircle} alt="Usuario" title="Usuario" />
                  </a>
                </li>
                <li>
                  <a href="#Carrinho" title="Carrinho">
                    <img src={ShoppingCart} alt="Carrinho" title="Carrinho" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
