import React , {Component,Fragment} from "react"
import './styles/Chinchon.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import JugadorEscoba from "../Components/JugadorEscoba";

class Escoba extends Component{
    state={
        ganador:undefined,
        input:undefined,
        jugadores:[
        ]
    }
    componentDidMount(){
        this.alertAgregarJugador()
    }
    agregarJugador(){
        document.getElementById("nuevoJugador").value=''
        this.setState({
            input:undefined
        })
        if(this.state.input){
                let arrayJugadores= this.state.jugadores
            arrayJugadores.push({
                nombre:this.state.input,
                puntajes:[],
                sumaPuntaje:0,
                gano:undefined
            })
            this.setState({
                jugadores:arrayJugadores
            })
        }
    }
    alertAgregarJugador(){
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                <div className='custom-ui'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Agregar nuevo jugador</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 offset-3 text-center form-group">
                                <input type="text" id='nuevoJugador' value={this.state.input} onChange={e=>{
                                    this.setState({
                                        input:e.target.value
                                    })
                                }} className='form-control' placeholder="Nombre del Jugador"/> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-center form-group">
                                    <button type='submit' className='btn btn-outline-success' onClick={e=>{
                                        this.agregarJugador()
                                        if(this.state.jugadores.length===4){ 
                                            onClose()
                                        }
                                    }}> Agregar Jugador</button>
                            </div>
                            <div className="col-6 text-center form-group">
                                    <button type='button' className='btn btn-outline-success' onClick={e=>{
                                        this.agregarJugador()
                                        onClose()
                                    }}> Listo!</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
            }
        });
    }
    alertGanador(){
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                <div className='custom-ui'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>{this.state.ganador} ha ganado el partido!</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-center form-group">
                                    <button type='button' className='btn btn-outline-success' onClick={e=>{
                                        this.reiniciarMarcadores()
                                        onClose()
                                    }}> Repetir Partido</button>
                            </div>
                            <div className="col-6 text-center form-group">
                                    <button type='button' className='btn btn-outline-success' onClick={e=>{
                                        this.props.history.goBack()
                                        onClose()
                                    }}> Salir</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
            }
        });
    }
    alertPuntajes(){
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                <div className='custom-ui'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Ingresar las escobas de Cada Jugador</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3>Escobas</h3>
                            </div>
                                {this.state.jugadores.map(jugador=>(
                                    <div className="col text-center form-group">
                                        <input type="number" name={jugador.nombre} className='form-control' placeholder={jugador.nombre}/> 
                                    </div>
                                ))}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3>Setenta</h3>
                            </div>
                                {this.state.jugadores.map(jugador=>(
                                    <div className="col text-center form-group">
                                        <input type="Checkbox" name={jugador.nombre} className='form-control' placeholder={jugador.nombre}/> 
                                    </div>
                                ))}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3>Siete De Oro</h3>
                            </div>
                                {this.state.jugadores.map(jugador=>(
                                    <div className="col text-center form-group">
                                        <input type="Checkbox" name={jugador.nombre} className='form-control' placeholder={jugador.nombre}/> 
                                    </div>
                                ))}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3>Cartas</h3>
                            </div>
                                {this.state.jugadores.map(jugador=>(
                                    <div className="col text-center form-group">
                                        <input type="Checkbox" name={jugador.nombre} className='form-control' placeholder={jugador.nombre}/> 
                                    </div>
                                ))}
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h3>Oros</h3>
                            </div>
                                {this.state.jugadores.map(jugador=>(
                                    <div className="col text-center form-group">
                                        <input type="Checkbox" name={jugador.nombre} className='form-control' placeholder={jugador.nombre}/> 
                                    </div>
                                ))}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center form-group">
                                    <button type='button' className='btn btn-outline-success' onClick={e=>{
                                        this.finalizarMano()
                                        onClose()
                                    }}> Finalizar Mano!</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
            }
        });
    }
    finalizarMano(){
        let newJugadores=this.state.jugadores
        this.state.jugadores.map(jugador=>{
            let sumaParcial=0
            let newJugador= jugador
            let puntajes=document.getElementsByName(jugador.nombre)
            sumaParcial+=parseInt(puntajes[0].value)
            if(puntajes[1].checked){
            sumaParcial+=1
            }
            if(puntajes[2].checked){
                sumaParcial+=1
            }
            if(puntajes[3].checked){
                sumaParcial+=1
            }
            if(puntajes[4].checked){
                sumaParcial+=1
            }
            newJugador.puntajes.push(sumaParcial)
            newJugador.sumaPuntaje+=sumaParcial
            if(newJugador.sumaPuntaje>=15){
                newJugador.gano=true
                this.setState({
                    ganador:jugador.nombre
                })
            }
        })
        this.setState({
            jugadores:newJugadores
        })
    }
    reiniciarMarcadores(){
        const jugadores = this.state.jugadores
        let newArray=[]
        jugadores.map(jugador=>{
            newArray.push({
                nombre:jugador.nombre,
                puntajes:[],
                sumaPuntaje:0,
                gano:undefined
            })
        })
        this.setState({
            ganador:undefined,
            jugadores:newArray
        }) 
    }
    render(){
        return(
            <div className="container-fluid pt-4 juego">
                {this.state.jugadores.length?
                <Fragment>
                    <div className="row">
                        <div className="col form-group text-left">
                            <button type='button' className='btn btn-dark' onClick={e=>{
                                this.props.history.goBack()
                            }}>Atras</button>
                        </div>
                    </div>
                    <div className="row puntaje">
                        {this.state.jugadores.map(jugador=>(
                            <JugadorEscoba nombre={jugador.nombre} puntajes={jugador.puntajes} sumaPuntaje={jugador.sumaPuntaje} gano={jugador.gano}/>
                        ))}
                    </div>
                    <div className="row botonera">
                        <div className="col text-center">
                            <button type='button' className='btn btn-success' onClick={e=>{
                                this.alertPuntajes()
                            }}>Mano Finalizada!</button>
                        </div>
                    </div>
                    {this.state.ganador?
                    this.alertGanador()
                    :
                    null
                    }
                </Fragment>
                :
                <Fragment>
                    <div className="row">
                        <div className="col form-group text-left">
                            <button type='button' className='btn btn-dark' onClick={e=>{
                                this.props.history.goBack()
                            }}>Atras</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Aun No Hay Jugadores</h1>
                        </div>
                    </div>
                <div className="row">
                    <div className="col text-center">
                        <button type='button' className='btn btn-success' onClick={e=>{
                                this.alertAgregarJugador()
                            }
                        }>
                            Agregar Jugadores
                        </button>
                    </div>
                </div>
                </Fragment>
                }
            </div>
        )
    }
}
export default Escoba