import React from 'react'

function Employee(props) {
  return (
    <div>
<h3>Employee:   {props.name}</h3>
<p>{props.role? props.role: "No role"}</p>

    </div>
  )
}

export default Employee