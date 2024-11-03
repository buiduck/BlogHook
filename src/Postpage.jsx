import { useParams, Link } from "react-router-dom"

const Postpage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post =>(post.id).toString() === id)
  return (
      <main className="PostPage">
        <article className="post">
          {post &&
            <>
            <h2> {post.title}</h2>
            <p className="PostDate">{post.datetime}</p>
            <p className="PostBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}> Delete post</button>
            </>
          }
          {!post &&
            <>
            <h2>Post not found</h2>
            <p> Well, that's disapointing</p>
            <p>
                <Link to='/'> Visit Our Home</Link>
            </p>
            </>
          }
        </article>
      </main>
  )
}

export default Postpage