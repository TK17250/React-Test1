function Item(props) {
    const { rtxx, RTXClick } = props
    return (
        <div className='rtx-image'>
			<img src={rtxx.thlUrl} onClick={() => {RTXClick(rtxx)}} alt="" />
			<h4>{rtxx.title}</h4>
		</div>
    )
}

export default Item;