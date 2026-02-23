import whatsappIcon from "../../assets/whatsapp.png";
import styles from "./whatsappFloat.module.css";

const WhatsappFloat = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5491136730478"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsappFloat;
