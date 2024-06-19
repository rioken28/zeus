import { useState } from "react";
import "./formulario.css";
import { FiX, FiFolderPlus } from "react-icons/fi";



export function FormularioIngreso(props){
 
  let flex = {
    display: "flex",
  };
  let none = {
    display: "none",
  };



  return (
    <>
      <form className="formIngreso" style={props.dis ? flex : none} onSubmit={(e)=>e.preventDefault()}>
        <div className="head">
          <h1>Ingreso de Datos</h1>
          <div className="cerrar" onClick={()=>{props.limpiarForm()}}>
            <FiX className="icon_close"></FiX>
          </div>
        </div>

        <div className="cuerpo">
          <div className="inp1">
            <label className="title_inpt" >
              cantidad
            </label>
            <input type="number" name="cantidad" value={props.cantidadForm} onChange={(e)=>{e.preventDefault(); props.setCantidadForm(e.target.value)}}/>
          </div>

          <div className="inp1">
            <label className="title_inpt" htmlFor="fecha">
              fecha
            </label>
            <input type="datetime-local" value={props.fechaForm} onChange={(e)=>{e.preventDefault(); props.setFechaForm(e.target.value)}}/>
          </div>

          <div className="cuerpo_bottom">
            <div className="cuerpo_left">
              <div className="select1">
                <label className="title_inpt" htmlFor="empresa">
                  Empresas
                </label>
                <select value={props.empresaForm} onChange={(e)=>{e.preventDefault(); props.setEmpresaForm(e.target.value)}}>
                  <option hidden></option>
                 {props.empresas.map(data=> <option key={data.id} value={data.id}>{data.nombre}</option>)}
                </select>
              </div>

              <div className="select1">
                <label className="title_inpt" htmlFor="campamento">
                  Campamentos
                </label>
                <select value={props.proyectoForm} onChange={(e)=>{e.preventDefault(); props.setProyectoForm(e.target.value)}}>
                  <option hidden></option>
                  {props.proyectos.map(data=> <option key={data.id} value={data.id}>{data.nombre}</option>)}
                </select>
              </div>

            </div>
            <div className="cuerpo_right">
              <div className="select1">
                <label className="title_inpt" htmlFor="servicio">
                  Servicios
                </label>
                <select value={props.servicioForm} onChange={(e)=>{e.preventDefault(); props.setServicioForm(e.target.value)}}>
                  <option hidden></option>
                  {props.servicios.map(data=> <option key={data.id} value={data.id}>{data.nombre}</option>)}
                </select>
              </div>
              <div className="select2">



                <button type="submit" onClick={()=>props.saveData()}>
                  <FiFolderPlus className="icon_load"></FiFolderPlus>
                  <span>guardar</span>
                </button>


              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
