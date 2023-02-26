function AppSearch(prpps) {
    const {value, onValueChange} = prpps
    return (
        <div className='app-search'>
        <input 
          className='app-search-input' 
          type="text"
          placeholder='หาการ์ดจอ'
          value={value}
          onChange={(event) => {onValueChange(event.target.value)}}
        />
      </div>
    )
}

export default AppSearch