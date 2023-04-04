import React from 'react'

function UserList({id, title, body}) {
  return (
    <div className="card" key={id}>
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div> 
  )
}

export default UserList