import React from 'react'
import { userAuth } from '../context/AuthContext'

const Dashboard = () => {

  const { user } = userAuth();

  return <div>Welcome {user?.email}!</div>
}

export default Dashboard