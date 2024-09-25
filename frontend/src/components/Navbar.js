import { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Clock from './offline/clock/Clock'

const Navbar = (props) => {
    const { time } = props;
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
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <div className="fs-2 fw-bold text-light mx-4">ToolBox</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Offline Toolbox
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/alarm">Alarm</Link></li>
                                    <li><Link class="dropdown-item" to="/stopwatch">Stopwatch</Link></li>
                                    <li><Link class="dropdown-item" to="/timer">Timer</Link></li>
                                    <li><Link class="dropdown-item" to="/reminder">Reminder</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/calculator">Calculator</Link></li>
                                    <li><Link class="dropdown-item" to="/cgpa-calculator">CGPA Calculator</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/writeNotes">Add Notes</Link></li>
                                    <li><Link class="dropdown-item" to="/notes">Your Notes</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/todos">Todos List</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Online Toolbox
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/currency-converter">Currency Converter</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/joke">Joke</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/random-quote">Quote</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/weather">Weather</Link></li>
                                    {/*<li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/news">News</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/affirmation">Affirmation</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/fact">Fact</Link></li>*/}
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Games
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/guess-number">Guess Number</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/puzzle">Sliding Puzzle</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/quiz">Eazy Quiz</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/roke-paper-scissors">Roke Paper Scissors</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/tic-tac-toe">Tic Tac Toe</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Clock time={time} />

            <Outlet />
        </>
    )
}

export default Navbar