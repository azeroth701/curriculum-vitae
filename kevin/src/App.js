import "./App.css";
import gek from "./assets/img/azer.jpg";
import Titulo from "./componets/titulo";
import Contacto from "./componets/contacto";

function App() {
  return (
    <div>
      <Titulo></Titulo>
      <img class="  h-[16rem] w-[16rem]  justify-center " src={gek} />
      <Contacto></Contacto>
    </div>
  );
}

export default App;
