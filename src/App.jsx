import GlobalStyle from "./global/GlobalStyle";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "./context/Auth";
import MainRoutes from "./routes/routes";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <MainRoutes />
          <GlobalStyle />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
