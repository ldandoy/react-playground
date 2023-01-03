import {createContext, useState} from 'react'

const DarkModeContext = createContext()

const DarkModeProvider = ({children}) => {
	const [darkMode, setDarkMode] = useState(false)
	
	const toggleDarkMode = (dark) => {
		setDarkMode(!darkMode)
	}

	return (
		<DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
			{children}
		</DarkModeContext.Provider>
	)
}

export {DarkModeContext, DarkModeProvider};
