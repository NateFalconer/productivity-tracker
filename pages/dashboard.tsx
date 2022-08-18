import React from 'react'
import { userAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'


const Dashboard = () => {

  const { user } = userAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login')
    return <></>
  } else {

    return (
      <div>Welcome {user?.email}!</div>
    )
  }
}
export default Dashboard