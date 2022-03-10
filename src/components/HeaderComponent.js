import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
constructor(props) {
super(props)

 this.state = {
}
}

 render() {
return (
<nav className='navbar  navbar-expand-lg  navbar-dark bg-dark'>
        <div class="container-fluid">
          <a class="navbar-brand">PomboCorreio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav me-auto mx-auto  mb-2 mb-lg-0">
              <li class="nav-item "><Link to="/" class="nav-link">Home</Link></li>
              <li class="nav-item"><Link to="/destinos" class="nav-link">Destinos</Link></li>
              <li class="nav-item"> <Link to="/employees" class="nav-link">promoções</Link></li>
              <li class="nav-item"><Link to="/contato" class="nav-link">contato</Link></li>
              
            </ul>
          </div>
        </div>
</nav>
)
}
}

export default HeaderComponent