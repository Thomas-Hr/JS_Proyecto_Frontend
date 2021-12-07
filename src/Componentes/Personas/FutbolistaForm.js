import React, { Component } from "react";
import axios from "axios";

class FutbolistaForm extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }
    submitNuevaPersona(evenet){
         //prevenga el comportamiento de efecto del submit
         evenet.preventDefault()
         axios.post('http://localhost:5000/futbolista', 
         {
             nombre: this.refs.nombre.value,
             nacionalidad: this.refs.nacionalidad.value,
             Posicion: this.refs.posicion.value,
            
           
         }
         ).then((respuesta)=> console.log(respuesta) )
         .catch( error=>console.log(error) )
    }

    render(){
        return(  
            <div className="row">
                <h5 className="center">Nuevo Futbolista</h5>
                <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nombre" ref="nombre" />
                            <label htmlfor="nombre">Nombre</label>
                        </div>  
                        <div className="input-field col s6">
                                <input id="nacionalidad" ref="nacionalidad"/>
                                <label htmlFor="nacionalidad">Nacionalidad</label>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="posicion" ref="posicion"/>
                            <label htmlfor="posicion">Posicion</label>
                        </div>  
                        <div className="input-field col s6">
                             <button name="action" type="submit" className="waves-effect waves-light btn">
                                Guardar
                             </button>
                        </div>  
                    </div>
                </form>
            </div>
        )
    }
}

export default FutbolistaForm
