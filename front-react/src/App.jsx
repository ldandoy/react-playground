import { DarkModeProvider } from './contexts/DarkModeContext'

import Router from './Router'

const App = () => {
  return (
    <div className="App">
      <DarkModeProvider>
          <Router />
      </DarkModeProvider>
    </div>
  )
}

export default App
