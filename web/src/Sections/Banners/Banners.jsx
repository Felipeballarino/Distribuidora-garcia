import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpeg";
import banner3 from "../../assets/banner3.jpg";
import style from "./banners.module.css";

import { Carousel } from "antd";

const whatsappLink =
  "https://api.whatsapp.com/send/?phone=5491136730478&text=Hola,%20quiero%20consultar%20por%20los%20productos";

const bannersData = [
  {
    image: banner1,
    title: "Distribuidora de Productos para Ferreterías",
    buttonText: "Consulte lista de precios por WhatsApp",
  },
  {
    image: banner2,
    title: "Consulte su lista de precio por WhatsApp",
    buttonText: "Consulte por WhatsApp",
  },
  {
    image: banner3,
    title: "Conozca nuestras marcas",
    buttonText: "Contactar por WhatsApp",
  },
];

const Banners = () => {
  const openWhatsapp = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <Carousel autoplay id="home" className={style.banners}>
        {bannersData.map((banner, index) => (
          <div key={index} className={style.bannerItem}>
            <div className={style.overlay}>
              <img
                src={banner.image}
                alt={`banner${index + 1}`}
                className={style.bannerImage}
              />

              <div className={style.textContainer}>
                <h1>{banner.title}</h1>
                <button onClick={openWhatsapp}>
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className={style.infoText}>
        <h1>Donde la calidad y el servicio se encuentran.</h1>
      </div>
    </div>
  );
};

export default Banners;
