import { useState } from 'react';
import './App.css';
import AppHeader from './com/AppHeader';
import Item from './com/Item';
import Post from './com/Post';
import RTXs from './data/rtxs';

function App() {
  const [seleRTX, setseleRTX] = useState(null)

  function onRTXopen(theRTX) {
    setseleRTX(theRTX)
  }

  function CloseClick() {
    setseleRTX(null)
  }

  const rtxElem = RTXs.map((RTXs, index) => {
    return <Item key={index} rtxx={RTXs} RTXClick={onRTXopen} />
  })

  let rtxPost = null
  if (!!seleRTX) {
    rtxPost = <Post RTXs={seleRTX} onBgClick={CloseClick} />
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