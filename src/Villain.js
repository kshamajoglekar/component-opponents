import React from 'react'

function Villain(props) {
  return (
    <div className="card d-inline-block w-25 mx-4 my-2">
      <img className="card-img-top img-fluid" alt={props.name} title={props.name} src={props.imageUrl}/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  )
}

export default Villain