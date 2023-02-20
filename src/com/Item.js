function Item(props) {
    const { rtxx } = props
    return (
        <div className='rtx-image'>
			<img src={rtxx.thlUrl} alt="" />
			<h4>{rtxx.title}</h4>
		</div>
    )
}

export default Item;