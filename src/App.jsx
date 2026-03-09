import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import { ImOpt } from 'react-icons/im'
// import Contact from './Pages/Contact'
// import Notfound from './Pages/NotFound'
import Footer from './Components/Footer'

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="/notfound" element={<Notfound />} />
            </Routes >


            <Footer />


        </>
    )
}

export default App;