import Sidebar from "../components/dashboard/bashboard"
import {ContentMain} from "./zeus/contentMain";

export function Zeus(){
    return(<div style={{  position: 'relative', width: '100%', height: '100vh', display: 'flex'}}>
             <Sidebar/>
             <ContentMain/>  
           </div>);
}