import { useState } from 'react';
import { postAPI } from '../api/api';
const Pagination = () =>{
  const [posts, setPosts]=useState([]);
  const [page, setPage]=useState(1);
  const [loading, setLoading]=useState(false);

  const loadMore=async () =>{
    setLoading(true);
    try{
      const { data }=await postAPI.getPaginated(page, 10);
      setPosts(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
    } finally {
      setLoading(false);
    }
  };
  return(
    <div className="pagination">
      <h3>Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={loadMore} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};
export default Pagination;