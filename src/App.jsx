import { useState } from 'react';
import FavoriteAnime from './components/FavoriteAnime/FavoriteAnime';
import './App.css';
import 'survey-core/defaultV2.min.css';
import Complete from './components/Complete/Complete';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [complete, SetComplete] = useState(false);
  console.log(' working');

  return (
    <div className='homepage'>
      <div className='navbar'>
        <Navbar />
      </div>
      {complete ? <Complete /> : <FavoriteAnime />}
    </div>
  );
}

export default App;
