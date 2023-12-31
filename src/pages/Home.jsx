import Competences from "../components/Competences";
import Navbar from "../components/Navbar";
import Cv from "../components/Cv";
import dev from "../assets/developpeur-web.jpg";
import "./Home.css";

function home() {
  return (
    <div>
      <Navbar />
      <div className="container-image-nom">
        <img src={dev} alt="image de développeur" className="image-dev" />
        <h1 className="mon-nom">ROMEO SEBASTIEN</h1>
        <h2 className="description">
          Développeur Fullstack Région Toulousaine
        </h2>
        <Competences id="competences" />
      </div>
      <Cv />
    </div>
  );
}

export default home;
