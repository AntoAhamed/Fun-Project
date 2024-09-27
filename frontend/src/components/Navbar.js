import { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Clock from './offline/clock/Clock'
import Alert from './offline/notepad/Alert'

const Navbar = (props) => {
    const { time, changeMode, mode, alert, alertMssg } = props;

    const [homeActive, setHomeActive] = useState("active");
    const [aboutActive, setAboutActive] = useState(null);
    const [contactActive, setContactActive] = useState(null);
    const [offlineActive, setOfflineActive] = useState(null);
    const [onlineActive, setOnlineActive] = useState(null);
    const [gameActive, setGameActive] = useState(null);

    const activateHome = () => {
        setHomeActive("active")
        setAboutActive(null)
        setContactActive(null)
        setOfflineActive(null)
        setOnlineActive(null)
        setGameActive(null)
    }

    const activateAbout = () => {
        setHomeActive(null)
        setAboutActive("active")
        setContactActive(null)
        setOfflineActive(null)
        setOnlineActive(null)
        setGameActive(null)
    }

    const activateContact = () => {
        setHomeActive(null)
        setAboutActive(null)
        setContactActive("active")
        setOfflineActive(null)
        setOnlineActive(null)
        setGameActive(null)
    }

    const activateOffline = () => {
        setHomeActive(null)
        setAboutActive(null)
        setContactActive(null)
        setOfflineActive("active")
        setOnlineActive(null)
        setGameActive(null)
    }

    const activateOnline = () => {
        setHomeActive(null)
        setAboutActive(null)
        setContactActive(null)
        setOfflineActive(null)
        setOnlineActive("active")
        setGameActive(null)
    }

    const activateGame = () => {
        setHomeActive(null)
        setAboutActive(null)
        setContactActive(null)
        setOfflineActive(null)
        setOnlineActive(null)
        setGameActive("active")
    }

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
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode} ${homeActive}`} onClick={activateHome} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode} ${aboutActive}`} onClick={activateAbout} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode} ${contactActive}`} onClick={activateContact} to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class={`nav-link text-${mode} ${offlineActive} dropdown-toggle`} onClick={activateOffline} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Offline Toolbox
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/reminder">Reminder</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/currency-converter">Currency Converter</Link></li>
                                    <li><Link class="dropdown-item" to="/cgpa-calculator">CGPA Calculator</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/write-notes">Add Notes</Link></li>
                                    <li><Link class="dropdown-item" to="/notes">Your Notes</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/todos">Todos List</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class={`nav-link text-${mode} ${onlineActive} dropdown-toggle`} onClick={activateOnline} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Online Toolbox
                                </Link>
                                <ul class="dropdown-menu">
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
                                <Link class={`nav-link text-${mode} ${gameActive} dropdown-toggle`} onClick={activateGame} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <div class="form-check form-switch fs-5">
                            <input class="form-check-input" onClick={changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class={`form-check-label text-${mode}`} for="flexSwitchCheckDefault">{mode === "dark" ? "Dark Mode" : "Light Mode"}</label>
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