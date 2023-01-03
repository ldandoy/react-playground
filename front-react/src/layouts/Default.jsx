import {useContext} from 'react'

import {DarkModeContext} from '../contexts/DarkModeContext'

const Default = ({children}) => {
    const {darkMode} = useContext(DarkModeContext)

    return (
        <div className={darkMode ? `container container-dark` : `container container-light`}>
            {children}
        </div>
    )
}

export default Default