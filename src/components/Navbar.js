import React from 'react'

// importing props type
import PropTypes from 'prop-types'




export default function Navbar(props) {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav flex-row  flex- space-between">
            
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/">Features</a>
            <a className="nav-link" href="/">Pricing</a>
            <a className="nav-link disabled" aria-disabled="true"  href="/">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    </div  >
  )
}

// props type useing  

// Navbar.propTypes = {
//   title: PropTypes.string ,
//   aboutText: PropTypes.string
// }



// using props isRequired 

Navbar.propTypes = {
  title: PropTypes.string.isRequired, 
  aboutText: PropTypes.string.isRequired
}


Navbar.defaultProps  = {
  title: 'set title here', 
  aboutText: 'about text here'
};

