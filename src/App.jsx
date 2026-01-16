import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home.jsx";
import NavbarComponent from "./components/navigation/navbar.jsx";

function App() {

  return (
    <>
        <NavbarComponent />
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    </>
  )
}

export default App
