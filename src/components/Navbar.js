import React, {useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom'
import './NavStyles.css'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
  return (
      <header>
          <nav class="navbar navbar-expand-md">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand" href="#">Movie+</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger direction='left' toggled={isOpen} toggle={setOpen} />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/trending' class="nav-link active" aria-current="page" href="#">Trending</Link>
        </li>
        <li class="nav-item">
          <Link to='/upcoming' class="nav-link" href="#">Upcoming</Link>
        </li>
        <li class="nav-item">
          <Link to='/toprate' class="nav-link" href="#">Top Rated</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
      </header>
  );
};

export default Navbar;
