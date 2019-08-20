import React , {Component} from "react"
import './styles/Jugador.css'
class JugadorEscoba extends Component{
    agregarPuntaje(){
        let puntajesArr= this.state.puntajes
        puntajesArr.push(parseInt(prompt('Ingresar Nueva Puntuacion')))
        this.setState(
            {
                puntajes:puntajesArr
            }
        )
    }
    mostrarPuntajeActual(){
        if(this.state.eliminado){
            let sumaPuntaje=0
            this.state.puntajes.map(puntaje=>{
                sumaPuntaje+=puntaje
            })
            this.setState({
                sumaPuntaje:sumaPuntaje
            })
            if(sumaPuntaje>100){
                alert(this.state.nombre+' Eliminado!')
                this.setState({
                    eliminado:true
                })
            }
        }
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className="col text-center p-4">
                <div className="container bg-dark jugador">
                    <div className="row">
                        <div className="col-12">
                            <h2>{this.props.nombre}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.puntajes.map(puntaje=>(
                            <div className="col-12 text-center">
                                <h3>
                                    {puntaje}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            {this.props.gano?
                            <div>
                                <h1 className='gano'>{this.props.sumaPuntaje}</h1>
                            </div>
                            :
                            <h1>{this.props.sumaPuntaje}</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default JugadorEscoba