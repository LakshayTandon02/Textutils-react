import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.darkmode} bg-${props.darkmode}`}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          {props.title}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/' />
              Home
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about' />
              {props.abt}
            </li>
          </ul>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-primary' type='submit'>
              Search
            </button>
          </form>
          <div class='form-check form-switch mx-4 text'>
            <input
              class='form-check-input'
              onClick={props.togglemode}
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
            />
            <label class='form-check-label' for='flexSwitchCheckDefault'>
              Dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = {
  title: 'Set the title',
};
