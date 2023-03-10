function Post(props) {
    const { RTXs, onBgClick } = props;
    return (
        <div className="tattoo-post">
            <div className="post-bg" onClick={onBgClick} >
                <div className="post-content">
                    <img src={ RTXs.thlUrl } alt="" />
                    <h4>{RTXs.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Post;