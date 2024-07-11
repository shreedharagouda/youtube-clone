import React from 'react'
import Sidebar from './Sidebar'
import MainConatainer from './MainConatainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body