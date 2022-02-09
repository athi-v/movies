import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Trending from './routes/Trending'
import Upcoming from './routes/Upcoming'
import Toprate from './routes/Toprate'

function App() {
  return (
    <>

<Routes>
  <Route path='/' exact element={<Home/>}/>
  <Route path='/trending' element={<Trending />} />
  <Route path='/upcoming' element={<Upcoming />} />
  <Route path='/toprate' element={<Toprate />} />

</Routes>
    </>
  );
}

export default App;
