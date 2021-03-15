import React from 'react';


function Saved() {
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/saved">Saved</a>
            </li>
        </ul>

        </nav>
    )
};

export default Saved