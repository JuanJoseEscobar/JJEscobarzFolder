import Header from "../Components/Header/Header"
import { DarkPlace } from "./DarkPlace"
import './style.scss'

export const Home = () => {
  return (
    <>
        <Header/>
        <div className="displayHome">

            <div className="MyPersonContent">

                <DarkPlace>

                    <h1>Juan Jose Escobar Zarasti</h1>
                    
                    <div className="MiImagenPerfil" alt="" style={{backgroundImage: "url('MiImagen.jpg')"}} />
                    
                </DarkPlace>
                <div className="TextBox">
                    <h1 id="SobreMi">...</h1>
                    <p>
                    Estudiante de Ingeniería multimedia. Apasionado por aprender las tecnologías que nos rodean. Comprometido con sus obligaciones y autodidacta. interesado en el desarrollo de FrontEnd con React JS y desarrollo de videojuegos. Siempre listo para aprender, trabajar y compartir en equipo, para alcanzar cualquier objetivo y superar todos los obstáculos.
                    </p>
                </div>
            </div>

            <div className="Footer" id="Contacto">
                soy El Footer
            </div>
        </div> 
    </>
  )
}
