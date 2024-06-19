
import { useEffect, useRef, useState } from "react";
import "./alimentacion.css";
import { FormularioIngreso } from "./formularioIngreso/formulario";

import { TablaContenido } from "./tablaContenido/tablaContenido";

import { FiSend, FiSearch, FiChevronsLeft, FiTrash, FiCloudDrizzle } from "react-icons/fi";
import { createAlimentacion, deleteAlimentacion, findAlimentacion, findGlobal } from "../../../services/alimentacion.service";



export function Alimentacion() {

  const [id, setId] = useState('');

  //me olvide para que hice esta vaina
  const [tableState, setTableState] = useState(true);

  //datos de la tabla
  const  [dis, setDis] = useState(false);
  const [data, setData] = useState([]);
  const [sumaYpromedio, setSumaYpromedio] = useState({ totales: {}, desayuno: {}, almuerzo: {}, cena: {}, colacion: {}, cenaTn: {} });

  //datos de parametros para hacer el filtro
  const [cantidad, setCantidad] = useState(50);
  const [fechaIni, setFechaIni] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [servicio, setServicio] = useState('');
  const [campamento, setCampamento] = useState('');
  const [empresa, setEmpresa] = useState('');


  //datos generales de empresa proyecto y servicios alimenticios
  const [empresas, setEmpresas] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [servicios, setServicios] = useState([]);


  //valores del formulario
  const [cantidadForm, setCantidadForm] = useState('');
  const [proyectoForm, setProyectoForm] = useState('');
  const [empresaForm, setEmpresaForm] = useState('');
  const [fechaForm, setFechaForm]= useState('');
  const [servicioForm, setServicioForm] = useState('');


    //funcion que hace una solicitud get para obtener los datos de la tabla
   async function findAllAlimentacion(cantidad, fechaIni, fechaFin, servicio, campamento, empresa){

    findAlimentacion({cantidad, fechaIni, fechaFin, servicio, campamento, empresa})
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
      if(res.status === 200){
        setData(res.resource.data);
        setSumaYpromedio(res.resource.sumasYpromedios);
      }
      
    })
    .catch(err=>{
      console.log(err);
    })
  
  }


  //funcion para cargar los registros al cargarse la pagina
  useEffect(async ()=>{

    //fetch tabla alimentacion
   await findAllAlimentacion(cantidad, fechaIni, fechaFin, servicio, campamento, empresa);

    //fetch de global
    findGlobal()
    .then((res)=>res.json())
    .then((res)=>{
      
  
      if(res.status === 200){
    
        setEmpresas(res.resource.empresas);
        setProyectos(res.resource.proyectos);
        setServicios(res.resource.servicios);
     
      }
      
    })
    .catch(err=>{
      console.log(err);
    })


  }, [tableState]);

  //funcion para crear un nuevo registro
  async function saveData(){

    const dataFormat= {
      cantidad: cantidadForm, 
      create_at: fechaForm, 
      detalle: servicioForm, 
      proyecto: proyectoForm, 
      empresa:empresaForm
    }
    await createAlimentacion(dataFormat, id);
    setProyectoForm('');
    setCantidadForm('');
    setEmpresaForm('');
    setFechaForm('');
    setServicioForm('');
    findAllAlimentacion(cantidad, '', '', '', '', '');
    setId('');
    setDis(!dis);
   
  }

  //funcion para limpiar el formulario
  function limpiarForm(){
    setProyectoForm('');
    setCantidadForm('');
    setEmpresaForm('');
    setFechaForm('');
    setServicioForm('');
    setId('');
    setDis(!dis);
  }

  //funcion para restablecer datos de la tabla de forma predeterminada
  function res(){
    findAllAlimentacion(cantidad, '', '', '', '', '');
  }
  //funcion literal para filtrar contenido de la tabla auxilio que tengo sueño
  function filtrar(){
    findAllAlimentacion(cantidad, fechaIni, fechaFin, servicio, campamento, empresa);
  }

  //funcion para eliminar registros
 async function deleteRegistro(id){
    deleteAlimentacion(id)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      findAllAlimentacion(cantidad, '', '', '', '', '');
    })
    .catch((err)=>console.log(err))
    
    return;
  }


  return (
    <>
      <FormularioIngreso
      dis={dis}
      setDis={setDis}
      setId={setId}

      //global 
      empresas={empresas}
      proyectos={proyectos}
      servicios={servicios}


      //function handleSave
      saveData={saveData}
      //function para cerrar formulario
      limpiarForm={limpiarForm}


        //valores de input

      cantidadForm = {cantidadForm}
      setCantidadForm = {setCantidadForm} 
      proyectoForm = {proyectoForm}
      setProyectoForm ={setProyectoForm}
      empresaForm = {empresaForm}
      setEmpresaForm  = {setEmpresaForm}
      fechaForm = {fechaForm}
      setFechaForm =  {setFechaForm} 
      servicioForm = {servicioForm} 
      setServicioForm  = {setServicioForm}

      />



      <div className="alimentacion">
        <div className="head_alimentacion">
          <div>

            <button onClick={()=>{return setDis(!dis)}}>
              <FiSend className="icon"></FiSend>
              <span className="span">GUARDAR</span>
            </button>

            <select value={cantidad} onChange={(e)=>setCantidad(e.target.value)}>
              <option hidden>
                <span>Cantidad</span>
              </option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={500}>500</option>
              <option value={1000}>1000</option>
              <option value={9999999999}>1000+</option>
            </select>
          </div>

          <div className="titulo_area">

            <button >
                <FiCloudDrizzle  className="icon"></FiCloudDrizzle>
                <span className="span">Pdf</span>
              </button>

              <button >
                <FiCloudDrizzle  className="icon"></FiCloudDrizzle>
                <span className="span">excel</span>
              </button>

          </div>

       

          <div>
            <button onClick={()=>res()}>
              <FiChevronsLeft className="icon"></FiChevronsLeft>
              <span className="span">Restablecer</span>
            </button>


            <button onClick={()=>filtrar()}>
              <FiSearch className="icon"></FiSearch>
              <span className="span">Filtrar</span>
            </button>
          </div>
        </div>
        <div className="main_alimentacion">
          <TablaContenido
           data={data}
           sumaYpromedio={sumaYpromedio}

           empresas={empresas}
           proyectos={proyectos}
           servicios={servicios}

           dis={dis}
           setDis={setDis}


           //valoresInput 
          setCantidadForm = {setCantidadForm} 
          setProyectoForm ={setProyectoForm}
          setEmpresaForm  = {setEmpresaForm}
          setFechaForm =  {setFechaForm} 
          setServicioForm  = {setServicioForm}


          //valores de los parametros, trabajaria con objetos u arreglos
   
            fechaIni = {fechaIni}
            setFechaIni = {setFechaIni}
            fechaFin  = {fechaFin}
            setFechaFin = {setFechaFin}
            servicio = {servicio}
            setServicio = {setServicio}
            campamento = {campamento}
            setCampamento = {setCampamento}
            empresa = {empresa}
            setEmpresa = {setEmpresa}
            
            setId = {setId}

            deleteRegistro={deleteRegistro}

            />
        </div>
      </div>
    </>
  );
}

/*
createAlimentacion({

  cantidad: cantidadForm.current.value, 
  create_at: fechaForm.current.value,       
  detalle: servicioForm.current.value, 
  proyecto: proyectoForm.current.value, 
  empresa: empresaForm.current.value


}).then(res=>res.json())
.then((res)=>{
  if(res.status === 201){
  setDis(!dis);
  }
})
.catch((err)=>{
  console.log(err);

}).finally(()=>{
  cantidadForm.current.value='';
  proyectoForm.current.value='';
  servicioForm.current.value='';
  fechaForm.current.value='';
  empresaForm.current.value='';
});*/