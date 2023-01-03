import {useContext} from 'react'

import {DarkModeContext} from '../contexts/DarkModeContext'

const Lightswitch = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

    const handleClick = () => {
        toggleDarkMode()
    }

    return (
        <button onClick={handleClick}>Switch mode</button>
    )
}

export default Lightswitch