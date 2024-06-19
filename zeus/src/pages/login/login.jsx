import { useState } from "react";
import "./login.css";
import { FiUser, FiLock } from "react-icons/fi";
import { login } from "../../services/login.service";


export function Login(){

    const [username, setUsarname] = useState();
    const [password, setPassword] = useState();

    async function sendCredentials(e){
        e.preventDefault();
        
        try{

            const res = await  login({username, password});
            const data = await  res.json();
           

        }catch(err){
            console.log(err);
        } 
    }

    return(<>
      
         <div className="content_login">        
         <div className='content_form'>
            <form className='form' onSubmit={(e)=>{sendCredentials(e)}}>  
                <div className='content_logo'>
                    <div className='logo'></div>
                </div>
                <div className='content_input'>

                  <div className="input_group">
                    <FiUser className="icon_user"></FiUser>
                    <input type='text' placeholder='Usuario' value={username} onChange={(e)=>setUsarname(e.target.value)}  required/>
                  </div>
                   
                    <div className="input_group">
                        <FiLock  className="icon_user"></FiLock>
                        <input type='password' placeholder='Contraseña' value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
                    </div>

                    <button type="submit">Entrar</button>
                </div>
                <div className='name'>gestion para campamentos</div>
                <div className='name'>EDCSOFTWARE</div>
            </form>
            <div className='content_img'></div>
            </div>
     
         </div>

    </>);
}
