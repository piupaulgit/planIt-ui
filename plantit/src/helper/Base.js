import React from 'react'
import Sidenav from '../components/Sidenav'

const Base = ({ children, title }) => {
    return (
        <div className="base">
            <Sidenav mainContent={children} title={title}>

            </Sidenav>
        </div>
    )
}

export default Base
