import React from 'react'
import { useState } from 'react'
import appData from '../../data/appData'
import { NavLink, Outlet } from 'react-router-dom'
import "./Application.css"

export default function AppList() {
    const [selectedApp, setSelectedApp] = useState()

    const appLinks = appData.map((app) => {
        return (
            <li className="list-app" key={app.id} onClick={() => setSelectedApp(app)}>
                <NavLink className="app-link" to={`/apps/${app.id}`}>
                    <h3>{app.title}</h3>
                    <img to={`/apps/${app.id}`} className="sing-app-img" src={app.imageSrc} />
                </NavLink>
            </li>
        )

    })

    return (
        <div>
            <h1 className="app-welcome">Welcome to my applications!</h1>
            <div className="app-container">
                <aside className="apps-nav">
                        <ul>{appLinks}</ul>
                </aside>
                <div className="apps-main">
                    <Outlet context={[selectedApp, setSelectedApp]} />
                    {/* where the app child will be displayed */}
                </div>
            </div>
        </div>
    )
}
