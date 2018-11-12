import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav(props) {
    return (
        <nav className='nav'>
            <ul className={`nav-list`} >
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        <FontAwesomeIcon className="nav-icon" icon="home" />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        <FontAwesomeIcon className="nav-icon" icon="plus" />
                        <span>New Question</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        <FontAwesomeIcon className="nav-icon" icon="list" />
                        <span>Leaderboard</span>
                    </NavLink>
                </li>
            </ul>
            <Logout />
        </nav>
    )
}