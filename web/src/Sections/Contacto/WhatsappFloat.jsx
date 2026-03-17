import whatsappIcon from "../../assets/whatsapp.png";
import styles from "./whatsappFloat.module.css";
import { trackWhatsappConversion } from "../../assets/googleAdsTracking";

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=5491136730478&text=Hola,%20quiero%20consultar%20por%20los%20productos%20mayoristas";

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
