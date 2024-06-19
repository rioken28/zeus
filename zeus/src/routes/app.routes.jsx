import { Route, Routes } from "react-router-dom";
import { Alimentacion } from "../components/areas/alimentacion/alimentacion";
import { Main } from "../components/main/main";
import { Login } from "../pages/login/login";
import { Zeus } from "../pages";
import { A } from "../pages/registro/registro";


export function AppRoutes(){
    return(
        <Routes>
              <Route path='/zeus' element={<Zeus/>}>
              {/* las unicas vistas que tenemos son login y zeus los demas son rutas hijas*/}
                  <Route path="main" element={<Main/>}/>
                  <Route path="alimentacion" element={<Alimentacion/>}/>
                  
              </Route>
              <Route path='/' element={<Login/>}/> 
              <Route path='/a' element={<A/>}/>
        </Routes> 
    );
}