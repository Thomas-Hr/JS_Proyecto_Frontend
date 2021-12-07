import React from 'react'

const FutbolistaLista = (props) => {
    return ( 
        
    <ul className="collection with-header green darken-1">
      <li className="collection-header "><h4>Futbolistas:</h4></li>
       {
           props.list.map((item)=>{
               return(
                <a href="#!" className="collection-item" 
                key= {item._id}
                onClick={props.actualizarFutbolista.bind(this,item)}
                >
                    {item.nombre}  
                </a>
               )
           })
       }
      

      
    </ul>
          
    )

}

export default FutbolistaLista
