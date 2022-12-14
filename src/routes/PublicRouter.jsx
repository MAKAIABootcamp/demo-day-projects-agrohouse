import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PublicRouter = ({ isAuthentication }) => {

  return (
    <div>
      {isAuthentication ? <Outlet /> : <Navigate to="/" />}
    </div>
  )
}

export default PublicRouter