import whatsappIcon from "../../assets/whatsapp.png";
import styles from "./whatsappFloat.module.css";
import { trackWhatsappConversion } from "../../assets/googleAdsTracking.js";

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=5491136730478&text=Hola%20Distribuidora%20Garcia.%20Me%20podrían%20pasar%20el%20listado%20de%20precios%20mayorista";

const WhatsappFloat = () => {
  const openWhatsapp = (e) => {
    e.preventDefault();
    console.log("CLICK EN WHATSAPP");
    console.log("window.gtag:", window.gtag);
    trackWhatsappConversion(whatsappLink);
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      onClick={openWhatsapp}
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsappFloat;
