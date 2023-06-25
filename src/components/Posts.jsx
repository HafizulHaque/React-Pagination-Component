const Posts = ({ loading, posts }) => {
  return(
    <div className="posts">
      {loading && <p className="text-danger">No Posts Yet..</p>}
      {!loading && (
        <ul className="list-group list-group-flush border-bottom">
          {posts.map(post => (
            <li className="list-group-item" key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Posts
