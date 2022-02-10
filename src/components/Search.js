import React, {useState, useEffect} from 'react';
import {FaRegStar} from 'react-icons/fa'
import axios from 'axios'
import './Searchstyles.css'
import {VscSearch} from 'react-icons/vsc'
const Search = () => {
    const [movie, setMovie] = useState([])
    const [query, setQuery] = useState('')
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    useEffect (() => {
    const fetchData = async () => {
        try {
            const {data: {results}} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fe0e635bd60cf4e677e3bbb4451689f0&query=${query}`)
            setMovie(results)
            console.log(results)
        }
        catch (error) {
            console.error(error) }
        }
        fetchData()
    }, [query])
  return (
      <div className='search'>
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-lg-12'>
                  <input className='searchs' type='text' placeholder='Search Movie' 
            className='input'
            onChange={event => setQuery(event.target.value)} 
                value={query}
            />            </div>
 <div className='content'>
  <div className='results'>
    {
      movie.map(item =>
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
  );
};

export default Search;
