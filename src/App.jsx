import { useState } from 'react';
import FavoriteAnime from './components/FavoriteAnime/FavoriteAnime';
import './App.css';
import 'survey-core/defaultV2.min.css';
import Complete from './components/Complete/Complete';

function App() {
  const [complete, SetComplete] = useState(false);
  console.log('not working');
  return (
    <div className='homepage'>
      {complete ? <Complete /> : <FavoriteAnime />}
    </div>
  );
}

export default App;
