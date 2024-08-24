import { useEffect } from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";


function App() {

  useEffect(() => document.documentElement.classList.add('font-vazir'), []);


  return (
    <div className="bg-gray-50 dark:bg-gray-800 h-screen relative overflow-y-scroll" id="app">
      <Header />
      <Routes>
        <Route  path="multi-project/"  element={<Home />}/>
      </Routes>
      <Footer />
    </div>

  )
}

export default App
