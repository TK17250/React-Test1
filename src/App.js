import { useState } from 'react';
import './App.css';
import AppHeader from './com/AppHeader';
import Item from './com/Item';
import Post from './com/Post';
import RTXs from './data/rtxs';

function App() {
  const [seleRTX, setseleRTX] = useState(RTXs[0])
	const rtxElem = RTXs.map((RTXs, index) => {
		return <Item key={index} rtxx={RTXs} />
	} )

  let rtxPost = null
  if (!!seleRTX) {
    rtxPost = <Post RTXs={seleRTX} />
  }
  
  return (
    <div className="App">
      <AppHeader />
      <div className='app-grid'>
		{rtxElem}
      </div>
	  {rtxPost}
    </div>
  );
}

export default App;