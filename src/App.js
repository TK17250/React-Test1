import { useState } from 'react';
import './App.css';
import AppHeader from './com/AppHeader';
import Item from './com/Item';
import Post from './com/Post';
import AppSearch from './com/search';
import RTXs from './data/rtxs';

function App() {
  const [seleRTX, setseleRTX] = useState(null)
  const [searchText, setSearchText] = useState("")

  function onRTXopen(theRTX) {
    setseleRTX(theRTX)
  }

  function CloseClick() {
    setseleRTX(null)
  }

  const rtxElem = RTXs.filter((RTX) => {
    return RTX.title.includes(searchText)
  }).map((RTXs, index) => {
    return <Item key={index} rtxx={RTXs} RTXClick={onRTXopen} />
  })

  let rtxPost = null
  if (!!seleRTX) {
    rtxPost = <Post RTXs={seleRTX} onBgClick={CloseClick} />
  }

  return (
    <div className="App">
      <AppHeader />
      <section className='app-section'>
        <div className='app-container'>
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className='app-grid'>
            {rtxElem}
          </div>
        </div>
      </section>
      {rtxPost}
    </div>
  );
}

export default App;