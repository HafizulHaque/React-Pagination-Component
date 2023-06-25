import { useState, useEffect } from "react"
import Posts from "./components/Posts"
import axios from "axios"
import Pagination from "./components/Pagination"

const App = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const fetchPosts = async (url) => {
      setLoading(true)
      let response = await axios(url)
      setPosts(response.data)
      setLoading(false)
    }
    fetchPosts('https://jsonplaceholder.typicode.com/posts');
  }, [])

  const lastPostIndex = currentPage * ITEMS_PER_PAGE;
  const firstPostIndex = lastPostIndex - ITEMS_PER_PAGE;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="container">
      <h1 className="my-2 py-2 border-bottom">My Posts</h1>
      <Posts 
        loading={loading} 
        posts={currentPosts}/>
      <Pagination 
        itemsPerPage={ITEMS_PER_PAGE} 
        totalItems={posts.length} 
        currentPage={currentPage}
        pageNeighbour={2}
        paginate={setCurrentPage}/>
    </div>
  )
}

export default App
