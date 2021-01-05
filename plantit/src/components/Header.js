import React from 'react'
import '../styles/Header.scss'
const Header = (prop) => {
    return (
        <div className="header">
            {prop.title}
        </div>
    )
}

export default Header
