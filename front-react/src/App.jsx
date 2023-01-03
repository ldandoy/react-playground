import { DarkModeProvider } from './contexts/DarkModeContext'
import Default from './layouts/Default'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="App">
      <DarkModeProvider>
        <Default>
          <Home />
        </Default>
      </DarkModeProvider>
    </div>
  )
}

export default App
