import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Container} from "@mui/material";
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})


function App() { 

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />

    {/*  HEADER */}
      <Navbar />

      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </Container>

      <Footer />
      
    </ThemeProvider>
  )
}

export default App
