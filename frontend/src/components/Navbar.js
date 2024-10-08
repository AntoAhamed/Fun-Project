import { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Clock from './toolbox/clock/Clock'
import Alert from './toolbox/notepad/Alert'
import Coin from '../assets/coin.png'

const Navbar = (props) => {
    const { time, changeMode, mode, alert, alertMssg, coins } = props;

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
                    <div className={`fs-2 fw-bold text-${mode} mx-4`}>ToolBox</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode}`} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link text-${mode} dropdown-toggle`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Toolbox
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/reminder">Reminder</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/currency-converter">Currency Converter</Link></li>
                                    <li><Link className="dropdown-item" to="/cgpa-calculator">CGPA Calculator</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/write-notes">Add Notes</Link></li>
                                    <li><Link className="dropdown-item" to="/notes">Your Notes</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/todos">Todos List</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/weather">Weather</Link></li>
                                    {/*<li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/location">Location</Link></li>*/}
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/dictionary">Dictionary</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link text-${mode} dropdown-toggle`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Games
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/guess-number">Guess Number</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/puzzle">Sliding Puzzle</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/quiz">Eazy Quiz</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/roke-paper-scissors">Roke Paper Scissors</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/tic-tac-toe">Tic Tac Toe</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode}`} aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <div className='mx-5 d-flex'>
                            <img src={Coin} alt='' style={{ width: '25px' }} />
                            <div className='fs-5 fw-bold mx-2'>{coins} Pt</div>
                        </div>
                        <div className="form-check form-switch fs-5">
                            <input className="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${mode}`} htmlFor="flexSwitchCheckDefault">{mode === "dark" ? "Dark" : "Light"}</label>
                        </div>
                    </div>
                </div>
            </nav>

            {alert === true ? <Alert alertMssg={alertMssg} /> : ''}

            <Clock time={time} />

            <Outlet />
        </>
    )
}

export default Navbar