
import {Link} from 'react-router-dom'

import {DarkModeContext} from '../contexts/DarkModeContext'

import Lightswitch from '../components/Lightswitch'

const Navbar = () => {

    return (
        <div className={`navbar`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/animals">Animals</Link>
                </li>
            </ul>
            <ul>
                <li><Lightswitch /></li>
            </ul>
        </div>
    )
}

export default Navbar