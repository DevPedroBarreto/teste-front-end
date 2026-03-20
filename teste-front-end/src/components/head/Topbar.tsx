import "./Topbar.scss";
import ShildIcon from "../../assets/images/icons/CreditCard.png";
import Truck from "../../assets/images/icons/Truck.png";
import CreditCard from "../../assets/images/icons/ShieldCheck.png";

function Topbar() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="container_top">
          <span>
            <img src={ShildIcon} alt="Compra segura" title="Compra segura" />
            Compra <span>100% segura</span>
          </span>

          <span>
            <img src={Truck} alt="Frete grátis" title="Frete grátis" />
            <span>Frete grátis</span> acima de R$ 200
          </span>

          <span>
            <img src={CreditCard} alt="Parcelamento" title="Parcelamento" />
            <span>Parcele</span> suas compras
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
