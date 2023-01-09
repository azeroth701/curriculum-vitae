import logo from "./logo.svg";
import "./App.css";
import Button from "./componets/button";
import gek from "./assets/img/azer.jpg";
function App() {
  return (
    <div>
      <div class=" float-right  mx-auto px-10  h-[60rem] w-[30rem]    ">
        <div class="box-border h-42 w-42 p10  ">
          <h1 class="  bg-yellow-400   text-[50px] font-[poppins] mt-8 text-center">
            Jeffry Garcia
          </h1>
          <p class=" text-[20px] font-[poppins] text-center bg-yellow-400 ">
            tecnico electronico,electrico
          </p>
        </div>

        <div class="box-border h-42 w-42 p10  mt-6   ">
          <h2 class="text-[28px]  underline ">Acerca de mi </h2>
          <p class="   text-justify mt-2">
            soy una persona con vision enfocada a lograr objetivos relajado
            abierto a escuchar ideas de mejora y a la critica constructiva para
            poder mejorar tanto en mi persona como profesionalmente
          </p>
        </div>

        <div class=" mt-6  ">
          <h3 class=" underline text-[28px] ">Experiencia laboral</h3>

          <p class=" mt-4 text-justify">
            laborando actualmente smit-nephew: equipment clerk: dar soporte a
            las lineas con equipos requeridos.
            <p class="mt-4 text-justify">
              2017-2019 servicio de alimentacion coral: auxiliar
              general:asistente en multiples areas en las cuales se requeria
              bridar soporte
            </p>
            <p class="mt-4 text-justify" w>
              2019 tribunal sopremo de elecciones: asistente tecnico en el
              ambito electrico
            </p>
          </p>
        </div>

        <div class="box-border h-42 w-42 p10  mt-6 ">
          <h4 class=" text-[28px] underline">Habilidades blandas</h4>
          <div class="grid grid-cols-2 gap-2">
            <p>● Ética</p>
            <p>● Puntualidad </p>
            <p>● Trabajo en equipo</p>
            <p>● Adaptabilidad </p>
            <p>● Actitudpositiva</p>
            <p>●Solución de problemas y conflictos</p>
          </div>
        </div>
      </div>

      <div class=" float-right container  border-gray-900    h-[90rem] w-30rem] bg-slate-500   h-54 w-64">
        <div>
          <img class="  h-[15rem] w-[15rem]" src={gek} />
        </div>
        <section class=" text-center">
          <h5 class=" underline text-[20px] text-gray-50 mt-6">Educacion</h5>
          <p class="mt-2 text-gray-50  text-[14px]">colegio tecnico vocacional Carlos Luis Fallas Sibaja tecnico medio
            en electrotecnica </p>
          <p class="text-gray-50 text-[14px] " > tecnico medio en electrotecnica</p>
          <p class="text-gray-50 text-[14px] " >2017-2019</p>

          <p class="mt-2 text-gray-50 mt-10 text-[14px]">Instituto Nacional de Aprendizaje </p>
          <p class="text-gray-50 text-[14px]">certificacion en principios de soldadura</p>
          <p class="text-gray-50 text-[14px]">2017</p>
          <h6 class=" underline text-[20px] mt-4 text-gray-50 ">Referencia</h6>
          <div class="text-[14px] mt-2 text-gray-50">
            <p  class="text-[14px]">Luis Elias Chavez Sanchez </p>
            <p  class="text-[14px]">Ingeniero Electrico</p>
            <p  class="text-[14px]">71094286</p>
          </div>
          <div class="text-[14px] mt-6 text-gray-50">
            <p class="text-[14px]">Jeffrey Leiva Meneses</p>
            <p class="text-[14px]">ingeniero industrial</p>
            <p class="text-[14px]">88445514</p>
          </div>
          <h7 class=" text-[20px] underline mt-9 text-gray-50 ">Telefono</h7>
          <p class="text-[14px] text-gray-50 mt-2">62740417</p>

          <h8 class="text-[20px] underline text-gray-50 ">Email</h8>

          <p class="text-[14px] text-gray-50 mt-2">jefrygarcia660@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

export default App;

