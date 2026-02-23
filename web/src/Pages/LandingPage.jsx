import Header from '../Components/Header/Header'
import Banners from '../Sections/Banners/Banners'
import Contacto from '../Sections/Contacto/Contacto'
import Marcas from '../Sections/Marcas/Marcas'
import QuienesSomos from '../Sections/QuienesSomos/QuienesSomos'
import Valores from '../Sections/Valores/Valores'
import WhatsappFloat from '../Sections/Contacto/WhatsappFloat';
import style from "./Landing.module.css";


const LandingPage = () => {
    return (
        <div>
            <Header />
            <div className={style.contenedor}>
                <Banners />
                <Valores />
                <QuienesSomos />
                <Marcas />
                <Contacto />
            </div>
            <WhatsappFloat />
        </div>
    )
}

export default LandingPage
