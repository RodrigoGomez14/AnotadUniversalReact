import React , {Component,Fragment} from "react"
import JugadorGenerala from "../Components/JugadorGenerala";
import './styles/Chinchon.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Generala extends Component{
    state={
        ganador:undefined,
        input:undefined,
        jugadores:[
        ]
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
                                <h1>Ingresar el puntaje de Cada Jugador</h1>
                            </div>
                        </div>
                        <div className="row">
                                {this.state.jugadores.map(jugador=>(
                                    (jugador.sumaPuntaje>100?
                                    null
                                    :
                                    <div className="col-6 offset-3 text-center form-group">
                                        <input type="number" id={jugador.nombre} className='form-control' placeholder={jugador.nombre}/> 
                                    </div>
                                    )
                                ))}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center form-group">
                                    <button type='button' className='btn btn-outline-success' onClick={e=>{
                                        this.finalizarMano()
                                        onClose()
                                    }}> finalizar Mano!</button>
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
            if(!jugador.eliminado){
                let newJugador= jugador
                let input=parseInt(document.getElementById(jugador.nombre).value)
                if(!input){
                    input=0
                }
                newJugador.puntajes.push(input)
                newJugador.sumaPuntaje+=input
                if(newJugador.sumaPuntaje>100){
                    newJugador.eliminado=true
                }
            }
        })
        this.setState({
            jugadores:newJugadores
        })
        this.finDelJuego()
    }
    finDelJuego(){
        let jugadoresEliminados=0
        let ganador=undefined
        this.state.jugadores.map(jugador=>{
            if(jugador.eliminado){
                jugadoresEliminados++
            }
            else{
                ganador=jugador.nombre
            }
        })
        console.log(this.state.jugadores.length)
        if(jugadoresEliminados===this.state.jugadores.length-1){
            this.setState({
                ganador:ganador
            })
        }
    }
    reiniciarMarcadores(){
        const jugadores = this.state.jugadores
        let newArray=[]
        jugadores.map(jugador=>{
            newArray.push({
                nombre:jugador.nombre,
                puntajes:[],
                sumaPuntaje:0,
                eliminado:false
            })
        })
        this.setState({
            ganador:undefined,
            jugadores:newArray
        }) 
    }
    render(){
        return(
            <Fragment>
            <div className="container-fluid pt-4 juego">
                {this.state.jugadores.length?
                <Fragment>
                    <div className="row">
                                <div className="col text-left">
                                    <button type='button' className='btn btn-dark' onClick={e=>{
                                        this.props.history.goBack()
                                    }}>Atras</button>
                                </div>
                            </div>
                    <div className="row">
                        <div className="col-1">
                        <div className="row puntaje">
                            <div className="row">
                            <div className="col-12">
                            <h2>{this.props.nombre}</h2>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                        <div className="col-12 text-center">
                            <h1>1</h1>
                        </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-11">
                            <div className="row puntaje">
                                {this.state.jugadores.map(jugador=>(
                                    <JugadorGenerala nombre={jugador.nombre} puntajes={jugador.puntajes} sumaPuntaje={jugador.sumaPuntaje} eliminado={jugador.eliminado}/>
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
                        </div>
                    </div>
                </Fragment>
                :
                <Fragment>
                    <div className="row">
                        <div className="col text-left">
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
            </Fragment>
        )
    }
}
export default Generala