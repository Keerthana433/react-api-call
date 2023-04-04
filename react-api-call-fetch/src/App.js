import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => 
      setUsers(res.data)
    )
  },[])
  console.log(users)

  return (
    <div className='App'>
        <Header/>
       <div className = 'container'>   
        {
          users.length > 0 ?(
            users.map(temp => {
              return <UserList key={temp.id} {...temp}/>              
          })
          ) : <Loading />
        }
      
    </div>
    </div>
   
  );
}

export default App;
