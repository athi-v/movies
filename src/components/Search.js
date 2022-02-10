import React, {useState, useEffect} from 'react';
import {FaRegStar} from 'react-icons/fa'
import axios from 'axios'
import './Searchstyles.css'
import {VscSearch} from 'react-icons/vsc'

const Search = () => {
    
  return (
      <div className='search'>
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-lg-12'>
                      <input type='text'  placeholder='Search Movie'/>
                      <button className='btn'><VscSearch /></button>
                  </div>
                  <div className='content' />

              </div>
          </div>
      </div>
  );
};

export default Search;
