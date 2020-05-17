import React from 'react';
import '../Styles/Styles.sass'
import Logo from '../Images/4.1_redux.png.png'

const Menu = () => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <div className="navbar-brand">
                    <img
                        src={Logo}
                        alt='logo REDUX'
                    />
                    Tweets Simulator REDUX
                </div>                              
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-secondary my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal" type="button">Nuevo Tweet</button>
                </form>            
            </div>
        </nav>
    );

export default Menu;