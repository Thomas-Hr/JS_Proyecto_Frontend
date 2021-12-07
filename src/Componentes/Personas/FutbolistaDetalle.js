import axios from 'axios'
import React from 'react'

const FutbolistasDetalle = (props) => {
   
  const remove = (_id) => {
    axios.get(`http://localhost:5000/futbolista/delete/${_id}`)
      .then(function(response) {
        this.setState({
          filtered: response
        })
      }).catch(function(error) {
        console.log(error)
      })
  }

    return ( 
        <div class="row">
    <div class="col s12 m6">
      <div class="card green lighten-1">
        <div class="card-content white-text">
          <span class="card-title">{props.futbolista.nombre} </span>
          <p>Nacionalidad: {props.futbolista.nacionalidad}</p>
          <p>Posicion: {props.futbolista.Posicion}</p>
    
        </div>
        <div class="card-action">
          <h5>Datos Importantes</h5>
        
          <button type="submit" onClick={remove.bind(this, props.futbolista._id)} className="waves-effect waves-light btn" >x</button>

        </div>
      </div>
    </div>
  </div>
    )

}

export default FutbolistasDetalle
