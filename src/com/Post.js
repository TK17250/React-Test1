function Post(props) {
    const { RTXs } = props;
    return (
        <div className="tattoo-post">
            <div className="post-bg">
                <div className="post-content">
                    <img src={ RTXs.thlUrl } alt="" />
                    <h4>{RTXs.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default Post;