import '../styles/registry.css'
import React from 'react'
import Login from './login';
import { CiLock, CiUser, CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";



function Registry() {
    /*

        Componente que representa un formulario de registro
    
    */
    return(
            <section className='registry'>
                <div className='form-box'>
                    <div className='form-value'>
                        <form >
                            <h2>Registro</h2>
                            <div className='inputbox'>
                                <CiUser className='ci'/>
                                <input type='text' required></input>
                                <label>Usuario</label>
                            </div>
                            <div className='inputbox'>
                                <CiMail className='ci'/>
                                <input type='email' required></input>
                                <label>Correo</label>
                            </div>
                            <div className='inputbox'>
                                <CiLock className='ci'/>
                                <input type='password' required></input>
                                <label>Contraseña</label>
                            </div>

                            <div className='google-logo'>
                                <p><FcGoogle className='logo'/> Continúa con Google</p>
                            </div>
                            
                            <button>Registrar</button>

                            <p className='login'>Ya estás registrado? <a href='./login'>Inicia sesión</a></p>
                        </form>

                    </div>
                </div>
            </section>
    );
}

export default Registry;
