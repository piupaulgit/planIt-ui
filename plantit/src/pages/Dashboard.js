import React from 'react'
import Base from '../helper/Base';

function Dashboard() {
    return (
        <Base title="dashboard">
            <h1>I am from dashboard</h1>
            <button className="btn btn-primary">Sign out</button>
        </Base>
    )
}

export default Dashboard;
