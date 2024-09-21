import { useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    /*const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('userInfo')
        navigate('/login')
    }

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'))

        if (!userInfo) {
            navigate('/login')
            return
        }
    }, [])*/

    return (
        <>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container">
                    <Link className="navbar-brand mx-4" to="#">Fun Project...</Link>
                    <div className="nav justify-content-end p-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Offline Features
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/alarm">Alarm</Link></li>
                                    <li><Link class="dropdown-item" to="/stopwatch">Stopwatch</Link></li>
                                    <li><Link class="dropdown-item" to="/timer">Timer</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/calculator">Calculator</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/writeNotes">Add Notes</Link></li>
                                    <li><Link class="dropdown-item" to="/notes">Your Notes</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/writeTodos">Add Todos</Link></li>
                                    <li><Link class="dropdown-item" to="/todos">Your Todos</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Online Features
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/weather">Weather</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/news">News</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar