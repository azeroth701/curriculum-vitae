const titulo = () => {
  return (
    <div className="  float-right  absolute inset-y-2 left-64 m-4 w-22">
      <div class="  text-center ">
        <h1 className="  underline  bg-yellow-400  text-[50px] font-[poppins] mt-2">
          Jeffry Garcia
        </h1>
        <p className=" underline text-[20px] font-[poppins]  bg-yellow-400 ">
          tecnico electronico,electrico
        </p>
      </div> 
      <div className=" mt-9  border-6 text-center  mt-6 ">
        <h2 className="text-[28px]  underline m-3 text-center ">
          Acerca de mi{" "}
        </h2>
        <p className=" text-center   ">
          soy una persona con vision enfocada a lograr objetivos relajado
          abierto a escuchar ideas de mejora y a la critica constructiva para
          poder mejorar tanto en mi persona como profesionalmente
        </p>
        <div className=" mt-6 grid grid-cols-1 gap-2 ">
          <h3 className="  underline text-[28px] ">Experiencia laboral</h3>

          <p className=" mt-4 text-center  ">
            laborando actualmente smit-nephew: equipment clerk: dar soporte a
            las lineas con equipos requeridos.
          </p>

          <p className="mt-4 text-center   ">
            2017-2019 servicio de alimentacion coral: auxiliar general:asistente
            en multiples areas en las cuales se requeria bridar soporte
          </p>
          <p className="mt-4 text-center ">
            2019 tribunal sopremo de elecciones: asistente tecnico en el ambito
            electrico
          </p>

          <div className=" m-6">
            <h4 className=" text-[28px] underline text-center ">Habilidades blandas</h4>
            <div className=" m-6 grid grid-cols-2 gap-1  text-center">
              <p>● Ética</p>
              <p>● Puntualidad </p>
              <p>● Trabajo en equipo</p>
              <p>● Adaptabilidad </p>
              <p>● Actitudpositiva</p>
              <p>●Solución de problemas y conflictos</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default titulo;
