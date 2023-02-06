import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Revival</a>
            </div>
            <div className="navbar-end gap-x-3">
                <Link to="/login" className="btn btn-sm rounded-none">Login</Link>
                <Link to="/register" className="btn btn-sm rounded-none">Signup</Link>
            </div>
        </div>
    )
}

export default Home