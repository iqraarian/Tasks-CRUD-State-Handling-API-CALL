import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { userAPI } from '../api/api';
const UserDetail = () =>{
  const { id }=useParams();
  const [user, setUser]=useState(null);
  const [loading, setLoading]=useState(true);
  useEffect(() =>{
    const fetchUser=async () =>{
      try{
        const { data }=await userAPI.get(id);
        setUser(data);
      } finally{
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  return(
    <div className="user-detail">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Address</h3>
      <p>
        {user.address.street}, {user.address.suite}<br />
        {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};
export default UserDetail;