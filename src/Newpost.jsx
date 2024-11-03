
const Newpost = ({handleSubmit ,postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
    <main className="NewPost">
        <h2>Newpost</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title</label>
          <input id="postTitle" type="text"
          required
          value={postTitle}
          onChange={(e)=> setPostTitle(e.target.value)}>
          </input>
          <label htmlFor="postBody">Post: </label>
          <textarea id="postBody" required value={postBody} onChange={(e) => setPostBody(e.target.value)}>
          </textarea>
          <button type="submit">Submit</button>
        </form>
    </main>
  )
}

export default Newpost