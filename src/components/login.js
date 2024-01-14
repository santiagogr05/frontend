import '../styles/registry.css'
import React from 'react'
import { CiLock, CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";



function Login() {
    /*

        Componente que representa un formulario de registro
    
    */
    return(
            <section className='registry'>
                <div className='form-box'>
                    <div className='form-value'>
                        <form >
                            <h2>Inicia Sesión</h2>
            
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
                            
                            <button>Iniciar sesión</button>

                            <p className='login'>No estás registrado? </p>
                        </form>

                    </div>
                </div>
            </section>
    );
}

export default Login;
