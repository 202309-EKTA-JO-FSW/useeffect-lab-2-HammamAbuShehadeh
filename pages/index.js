import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userData, setUserData] = useState([]);
  const [username , setUsername] = useState("Hammam");
  useEffect((()=> {
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => setUserData(data))
  }), [username])
  return (
    <div className="card">
      <Form userName={username} setUsername={setUsername}/>
      <UserCard name={userData.name} username={userData.login} avatar={userData.avatar_url}/>
    </div>
  );
}
