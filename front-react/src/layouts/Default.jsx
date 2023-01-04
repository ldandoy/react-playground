import {useContext} from 'react'

import {DarkModeContext} from '../contexts/DarkModeContext'
import Navbar from '../components/Navbar'

const Default = ({children}) => {
    const {darkMode} = useContext(DarkModeContext)

    return (<div className={`${ darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div className={`container`}>
            <div className='content'>
                {children}
            </div>
        </div>
    </div>)
}

export default Default