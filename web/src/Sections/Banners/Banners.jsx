import { Carousel } from "antd";
import { useEffect, useState } from "react";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpeg";
import banner3 from "../../assets/banner3.jpg";
import { trackWhatsappConversion } from "../../assets/googleAdsTracking.js";
import style from "./banners.module.css";

const whatsappLink = "https://api.whatsapp.com/send/?phone=5491136730478&text=Hola%20Distribuidora%20Garcia.%20Me%20podrían%20pasar%20el%20listado%20de%20precios%20mayorista";

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

const promocionesData = [
  { id: "1_8OTZu6xAE-zWZBpsx4-YKtD7Xb9o5Im" },
  { id: "1PTLLat0dF7zRD9amQHlxrGyo7AmvwZ_G" },
  { id: "1fM8fVYrGDkd2alFo1AD6xCxUJIIs9-u7" },
  { id: "1YvMjVDyjjHLBCvbcuDnwOjpb6T9RP5c7" },
  { id: "1YkDCXbQWJFfDkcJY9ebPv7CzA5CAGGCu" },
];

const Banners = () => {
  const openWhatsapp = () => {
    trackWhatsappConversion(whatsappLink);
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
        <h1>Promociones vigentes</h1>
      </div>

      <div className={style.promocionesGrid}>
        {promocionesData.map((promo, index) => (
          
            key={index}
            href="https://api.whatsapp.com/send/?phone=5491136730478"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`https://drive.google.com/thumbnail?id=${promo.id}&sz=w400`}
              alt={`promocion${index + 1}`}
              className={style.promocionImg}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banners;
