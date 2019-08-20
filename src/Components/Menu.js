import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import JugadorChinchon from './JugadorChinchon'
import './styles/Menu.css'
class Menu extends Component{
    render(){
        return(
            <div className='container-fluid bg-dark pt-4 menu'>
                <div className="row">
                    <div className="col-6 form-group text-center">
                        <Link to='/Chinchon'>
                            <button type='button' className='btn btn-success'>ChinChon</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Truco'>
                            <button type='button' className='btn btn-success'>Truco</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Chancho'>
                            <button type='button' className='btn btn-success'>Chancho</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Escoba'>
                            <button type='button' className='btn btn-success'>Escoba</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Chorizo'>
                            <button type='button' className='btn btn-success'>Chorizo</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Generala'>
                            <button type='button' className='btn btn-success'>Generala</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Burako'>
                            <button type='button' className='btn btn-success'>Burako</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Rummy'>
                            <button type='button' className='btn btn-success'>Rummy</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Jodete'>
                            <button type='button' className='btn btn-success'>Jodete</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Uno'>
                            <button type='button' className='btn btn-success'>Uno</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Diezmil'>
                            <button type='button' className='btn btn-success'>Diezmil</button>
                        </Link>
                    </div>
                    <div className="col-6 form-group text-center">
                        <Link to='/Generico'>
                            <button type='button' className='btn btn-success'>Generico</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu