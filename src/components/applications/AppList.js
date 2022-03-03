import React from 'react'
import { useState } from 'react'
import appData from '../../data/appData'
import { NavLink, Outlet } from 'react-router-dom'
import "./Application.css"

export default function AppList() {
    const [selectedApp, setSelectedApp] = useState()

    const appLinks = appData.map(app => {
        return (
            <li className="list-app" key={app.id} onClick={() => setSelectedApp(app)}>
                <NavLink className="app-link" to={`/apps/${app.id}`}>
                    {app.title}
                </NavLink>
                <img to={`/apps/${app.id}`} className="sing-app-img" src={app.imageSrc} />

            </li>
        )
    })

    return (
        <div>
            <h1 className="app-title">Welcome to my applications!</h1>
            <div className="app-container">
                <aside>
                    <div className="apps-nav">
                        <ul>{appLinks}</ul>
                    </div>
                </aside>
                <div className="apps-main">
                    <Outlet context={[selectedApp, setSelectedApp]} />
                    {/* where the app child will be displayed */}
                </div>
            </div>
        </div>
    )
}
