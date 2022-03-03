import React from 'react'
import { useState } from 'react'
import appData from '../../data/appData'
import { NavLink, Outlet } from 'react-router-dom'

export default function AppList() {
    const [selectedApp, setSelectedApp ] = useState()

    const appLinks = appData.map(app => {
      return (
        <li key={app.id} onClick={() => setSelectedApp(app)}>
          <NavLink to={`/apps/${app.id}`}>
            {app.title}
          </NavLink>
        </li>
      )
    })
  
    return(
      <div>
        <h1>Welcome to my applications!</h1>
        <div className="flex-container">
          <div className="apps-nav">
            <ul>{appLinks}</ul>
          </div>
          <div className="apps-main">
            <Outlet context={[selectedApp, setSelectedApp]} />     
                {/* references the children routes of the Apps component */}        
          </div>
        </div>
      </div>
    )
  }
