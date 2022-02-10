import React, {useState, useEffect} from 'react';
import {FaRegStar} from 'react-icons/fa'
import axios from 'axios'

const Upcoming = () => {

const [upcomings, setUpcomings] = useState([]);

const REACT_APP_API_URL = "https://api.themoviedb.org/3"
const IMG_API = "https://image.tmdb.org/t/p/w500";
const fetchMovies = async () => {


  const {data: {results}} = await axios.get(`${REACT_APP_API_URL}/movie/upcoming`, 
  {
    params: {
      api_key:"fe0e635bd60cf4e677e3bbb4451689f0"
    }
  }
  )
  setUpcomings(results)
}

useEffect(() => {
  fetchMovies()
}, [])
  return (
    <div classNames='upcoming'>
    <div className='container-fluid'>
    <div className='row'>
      <div className='col-lg-12'>
        <div className='title'>
          <h2>Upcoming Movies</h2>
        </div>
      
      </div>

    <div className='content'>
<div className='results'>
  {
    upcomings.map(item =>
    (
      <div className='car' key={item.id}>
      <img className='poster' src={IMG_API + item.poster_path} />
      {item.title}
      <br/>
      <FaRegStar className='icon' /> {item.vote_average}

      </div>
    ))
  }
</div>
    </div>

    </div>
    </div>
    </div>
  )
};

export default Upcoming;
