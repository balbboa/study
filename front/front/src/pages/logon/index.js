import React from 'react';
import { Link} from 'react-router-dom';


import './styles.css';
import { FaSignInAlt } from 'react-icons/fa'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="" className=""/>
                <form>
                    <h1>
                        Faça seu Logon
                    </h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    
                    <Link className="back-link" to="/register">
                        <FaSignInAlt size={16} color="#E02041" /> 
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="" className=""/>
        </div>
    );
}

export default Logon;