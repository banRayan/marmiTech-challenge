import GlobalStyle from "./global/GlobalStyle";
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        <MainRoutes />
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
