import './App.css';

function App() {
  const textInput = <input type="text" />
  const okbt = (
    <button type="button" class="btn btn-primary">Button</button>
  )
  return (
    <div className="App">
      <header className='app-header'>
        <img className='header-logo' src="/image/logo.png" />
      </header>
      <div className='app-grid'>
        <div className='rtx-image'>
			<img src='/image/2050.jpeg' />
			<h4>2050</h4>
		</div>
        <div className='rtx-image'>
			<img src='/image/2050.jpeg' />
			<h4>2060</h4>
		</div>
		<div className='rtx-image'>
			<img src='/image/2050.jpeg' />
			<h4>2070</h4>
		</div>
		<div className='rtx-image'>
			<img src='/image/2050.jpeg' />
			<h4>2080</h4>
		</div>
      </div>
    </div>
  );
}

export default App;
