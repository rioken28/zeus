import { deleteAlimentacion } from "../../../../services/alimentacion.service";
import "./tablaContenido.css";



export function TablaContenido({
  data,
  sumaYpromedio,
  empresas,
  proyectos,
  servicios,

  dis,
  setDis,

  setCantidadForm,
  setProyectoForm,
  setEmpresaForm,
  setFechaForm,
  setServicioForm,

  servicio, 
  setServicio,
  campamento, 
  setCampamento,
  empresa, 
  setEmpresa,

  fechaIni, 
  setFechaIni,

  fechaFin,  
  setFechaFin,

  setId,

  deleteRegistro

}) {



  return (
    <div className="content_table">

            <div className="params">

              <input  type="date" value={fechaIni} onChange={(e)=>setFechaIni(e.target.value)}/>
              <input   type="date" value={fechaFin} onChange={(e)=>setFechaFin(e.target.value)}/>


              <select value={empresa} onChange={(e)=>setEmpresa(e.target.value)}>
                <option hidden>Empresas</option>
                {empresas.map(data=> <option key={data.id}>{data.nombre}</option>)}
              </select>
 

              <select value={campamento} onChange={(e)=>setCampamento(e.target.value)}>
                <option hidden>Proyectos</option>
                {proyectos.map(data=> <option key={data.id}>{data.nombre}</option>)}
              </select>

                
              <select value={servicio} onChange={(e)=>setServicio(e.target.value)}>
                <option hidden>Servicios</option>
                {servicios.map(data=> <option key={data.id}>{data.nombre}</option>)}
              </select>
            </div>

      <table className="table">
        <thead>
          <tr>
            <th className="date">Fecha</th>
            <th>Empresa</th>
            <th className="date">Proyecto</th>
            <th className="date">Servicio</th>
            <th className="date">Cantidad de Consumo</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((dt)=>{
              {return <tr>
                  <th>{dt.create_at}</th>
                  <th>{dt.nombre_empresa}</th>
                  <th>{dt.nombre_proyecto}</th>
                  <th>{dt.nombre_servicio}</th>
                  <th>{dt.cantidad}</th>
                  <th>
                    <button className="update_alim" onClick={()=>{
                        console.log(dt);
                        setId(dt.id_alimentacion);
                        setCantidadForm(dt.cantidad);
                        setEmpresaForm(dt.id_empresa);
                        setProyectoForm(dt.id_proyecto);
                        setServicioForm(dt.id_detalle);
                        setFechaForm(new Date(dt.create_at));
                        setDis(!dis);
                    }}>update</button>
                    <button className="delete_alim" onClick={async ()=>await deleteRegistro(dt.id_alimentacion)}>delete</button>
                  </th>
               </tr>}
            })
          }
        </tbody>
      </table>

        <div className="content_total">

             <div>
                <span>Operación</span> 
             </div>
      
      
              <div>
               <span>Total</span>
              </div>

            <div>
              <span>Desayuno</span>
            </div>

               <div>
                 <span>Almuerzo</span>
               
               </div>

              <div>
                <span>Cena</span>
              
              </div>

               <div>

                <span>Colación</span>
              
               </div>
               <div>

                <span>Cena TN</span>
              
               </div>

          
        </div>

        <div className="content_total">

             <div>
               <span>Suma</span>
                
              </div>
      
              <div>
                <span>{sumaYpromedio.totales.suma || 0}</span>
              </div>

            <div>
             
              <span>{sumaYpromedio.desayuno.suma || 0}</span>
            </div>

               <div>
                
                 <span>{sumaYpromedio.almuerzo.suma || 0}</span>
               </div>

              <div>
              
                 <span>{sumaYpromedio.cena.suma || 0}</span>
              </div>

               <div>
               
                 <span>{sumaYpromedio.colacion.suma || 0}</span>
               </div>

             <div>
            
             <span>{sumaYpromedio.cenaTn.suma || 0}</span>
             </div>
      
        </div>

        <div className="content_total promedios">
          
              <div>
               <span>Promedio</span>

              </div>

              <div>
              
              <span>{sumaYpromedio.totales.promedio || 0}</span>
              </div>

            <div>
             
            <span>{sumaYpromedio.desayuno.promedio || 0}</span>
            </div>

               <div>
            
               <span>{sumaYpromedio.almuerzo.promedio || 0}</span>
               </div>

              <div>
               
              <span>{sumaYpromedio.cena.promedio || 0}</span>
              </div>

               <div>
              
               <span>{sumaYpromedio.colacion.promedio || 0}</span>
               </div>

             <div>
           
             <span>{sumaYpromedio.cenaTn.promedio}</span>
             </div>
       

        </div>

    </div>
  );
}
