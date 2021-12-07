import React, {Component} from 'react'
import axios from 'axios'
import FutbolistasDetalle from './Personas/FutbolistaDetalle';
import FutbolistaForm from './Personas/FutbolistaForm';
import FutbolistaLista from './Personas/FutbolistaLista';
import imagen from '../assets/img/balon.png';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      futbolista: [],
      futbolistaActual : {}
    }

    //vincular la funcion de actualizar al componente
    this.actualizarFutbolistaActual = this.actualizarFutbolistaActual.bind(this)
  }

  //llamar a la api rest
  componentDidMount(){
      const url = "http://localhost:5000/futbolista"
      axios.get(url)
          .then((respuesta) => {   
              this.setState({
                 futbolista: respuesta.data
              })
              console.log(respuesta.data)
          })
          .catch((error) => { console.log(error) })

    
  }



  //Establecer la persona a ver detalle
  actualizarFutbolistaActual(futbolista){
    //actualizar state:
    this.setState({
      futbolistaActual: futbolista
    })
  }

  render(){
    return (
      <div className="container-fluid">
        
          <div className="row" > 
              <div className="col s12">
              <nav>
                <div className="nav-wrapper green lighten-2">
                <img src={imagen} width="170" height="100"></img>
                  <a href="#!" class="brand-logo right">Futbolistas</a>
                </div>
              </nav>
              </div>
          </div>
          <div className="row" >
              <div className="col s3">
                    <FutbolistaLista list={this.state.futbolista} 
                     actualizarFutbolista={this.actualizarFutbolistaActual} 
                    
                    />
                </div>
              <div className="col s9">
                  <FutbolistasDetalle  futbolista={this.state.futbolistaActual}/>
              </div>
          </div>
          <div className="row">
              <div className="col s12">
                  <FutbolistaForm />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
